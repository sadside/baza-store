'use client';

import React, { useDeferredValue } from 'react';
import s from './index.module.scss';
import classNames from 'classnames';
import { InputPhoneMask } from '@/components/ui/inputPhoneMask/InputPhoneMask';
import InputForm from '@/components/inputForm/InputForm';
import { InputNameMask } from '@/components/inputNameMask/InputNameMask';
import {
  $cityInputValue,
  $citySuggestions,
  $houseInputValue,
  $houseSuggestions,
  $selectedCity,
  $selectedStreet,
  $streetInputValue,
  $streetSuggestions,
  cityInputChanged,
  citySelected,
  getCitySuggestionsFx,
  getHouseSuggestionsFx,
  getStreetSuggestionsFx,
  houseInputChanged,
  houseSelected,
  streetInputChanged,
  streetSelected,
} from '@/stores/order/init';
import { useUnit } from 'effector-react';
import { Loader } from '@/components/loader/Loader';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutside } from '@shared/lib/utils/hooks/useOutside';

interface IProps {
  title?: string;
  main?: boolean;
  errors?: any;
  reset?: any;
  register?: any;
  resetField?: any;
  setValue: any;
}

const ZakazDannie = ({ title, main, errors, reset, register, resetField, setValue }: IProps) => {
  const citySuggestions = useUnit($citySuggestions);
  const value = useUnit($cityInputValue);

  const cityValue = useDeferredValue(value);

  const streetSuggestions = useUnit($streetSuggestions);
  const houseSuggestions = useUnit($houseSuggestions);
  const streetInputValue = useUnit($streetInputValue);
  const houseInputValue = useUnit($houseInputValue);

  const loadingStreetSuggestions = useUnit(getStreetSuggestionsFx.pending);
  const loadingCitySuggestions = useUnit(getCitySuggestionsFx.pending);
  const loadingHouseSuggestions = useUnit(getHouseSuggestionsFx.pending);

  const selectedCity = useUnit($selectedCity);
  const selectedStreet = useUnit($selectedStreet);

  const { isShow, ref, setIsShow } = useOutside(false);
  const { isShow: isShowCity, ref: cityRef, setIsShow: setIsShowCity } = useOutside(false);
  const { isShow: isShowStreet, ref: streetRef, setIsShow: setIsShowStreet } = useOutside(false);

  return (
    <div className={s.root}>
      <span>Доставка до двери</span>
      <div className={s.form}>
        {main ? (
          <div className={s.inputs}>
            <div className={s.all}>
              <span className={s.title}>Имя*</span>
              <span className={s.prov}>
                <InputNameMask
                  style={{ width: '100%' }}
                  name="name"
                  register={register}
                  error={Boolean(errors.name)}
                  placeholder={`Введите Имя..`}
                />
                {errors.name && <span className={s.txt}>{errors.name?.message}</span>}
              </span>
            </div>
            <div className={s.all}>
              <span className={s.title}>Фамилия*</span>
              <span className={s.prov}>
                <InputNameMask
                  style={{ width: '100%' }}
                  name="surname"
                  register={register}
                  error={Boolean(errors.surname)}
                  placeholder={`Введите Фамилию..`}
                />
                {errors.surname && <span className={s.txt}>{errors.surname?.message}</span>}
              </span>
            </div>
            <div className={s.all}>
              <span className={s.title}>E-mail*</span>
              <span className={s.prov}>
                <input
                  {...register('mail', {
                    required: 'Введите E-mail',
                  })}
                  className={classNames(s.input, errors.mail && s.error)}
                  placeholder={'Введите E-mail..'}
                />
                {errors.mail && <span className={s.txt}>{errors.mail?.message}</span>}
              </span>
            </div>
            <div className={s.all}>
              <span className={s.title}>Телефон*</span>
              <span className={s.prov}>
                <InputPhoneMask
                  style={{ width: '100%' }}
                  resetFiled={reset}
                  error={!!errors.phone}
                  register={register}
                  className={classNames(s.input, errors.phone && s.error)}
                  name="phone"
                  type="tel"
                />
                {errors.phone && <span className={s.txt}>{errors.phone?.message}</span>}
              </span>
            </div>
          </div>
        ) : (
          <>
            <div className={s.inputs}>
              <div className={classNames(s.all, s.form)} ref={cityRef}>
                <span className={s.title}>Город</span>
                <span className={s.prov}>
                  <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      cityInputChanged(e.target.value);
                      setIsShowCity(true);
                    }}
                    value={cityValue}
                    className={classNames(s.input, errors.city && s.error)}
                    placeholder={`Введите город`}
                  />

                  <AnimatePresence>
                    {isShowCity && citySuggestions.length > 0 && (
                      <motion.div
                        className={s.select}
                        initial={{ height: 0, opacity: 0 }}
                        style={{
                          overflow: 'hidden',
                        }}
                        transition={{
                          duration: 0.3,
                          type: 'tween',
                        }}
                        animate={{
                          height: 'min-content',
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                      >
                        {!loadingCitySuggestions &&
                          citySuggestions.map((item) => {
                            return (
                              <li
                                onClick={() => {
                                  citySelected(item);
                                }}
                              >
                                {item}
                              </li>
                            );
                          })}
                        {isShowCity && loadingCitySuggestions && (
                          <div>
                            <Loader height={50} width={50} />
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </span>
              </div>
              <div className={classNames(s.all, s.form)}>
                <span className={s.title}>Улица</span>
                <span className={s.prov}>
                  <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      if (selectedCity) streetInputChanged(e.target.value);
                      // else toast.error("Введите город");
                      else alert('Введите город.');
                    }}
                    value={streetInputValue}
                    className={classNames(s.input, errors.city && s.error)}
                    placeholder={`Введите улицу`}
                  />
                  <AnimatePresence>
                    {streetSuggestions.length > 0 && (
                      <motion.div
                        className={s.select}
                        initial={{ height: 0, opacity: 0 }}
                        style={{
                          overflow: 'hidden',
                        }}
                        transition={{
                          duration: 0.3,
                          type: 'tween',
                        }}
                        animate={{
                          height: 'min-content',
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                      >
                        {!loadingStreetSuggestions &&
                          streetSuggestions.map((item) => {
                            return <li onClick={() => streetSelected(item)}>{item}</li>;
                          })}
                        {loadingStreetSuggestions && (
                          <div>
                            <Loader height={50} width={50} />
                          </div>
                        )}

                        {streetSuggestions.length == 0 && streetInputValue && (
                          <div>Ничего не найдено. Введите корректное значение</div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </span>
              </div>
            </div>
            <div className={s.bot}>
              <div className={classNames(s.all, s.form)} ref={ref}>
                <span className={s.title}>Дом</span>
                <span className={s.prov}>
                  <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      if (selectedStreet) {
                        houseInputChanged(e.target.value);
                        setIsShow(true);
                      } else alert('Введите улицу и город.');
                    }}
                    value={houseInputValue}
                    className={classNames(s.input, errors.city && s.error)}
                    placeholder={`Введите дом`}
                  />
                  <AnimatePresence>
                    {isShow && houseSuggestions.length > 0 && (
                      <motion.div
                        className={s.select}
                        initial={{ height: 0, opacity: 0 }}
                        style={{
                          overflow: 'hidden',
                        }}
                        transition={{
                          duration: 0.3,
                          type: 'tween',
                        }}
                        animate={{
                          height: 'min-content',
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                      >
                        {!loadingHouseSuggestions &&
                          houseSuggestions.map((item) => {
                            return <li onClick={() => houseSelected(item)}>{item}</li>;
                          })}
                        {loadingHouseSuggestions && (
                          <div>
                            <Loader height={50} width={50} />
                          </div>
                        )}

                        {houseSuggestions.length == 0 && houseInputValue && (
                          <div>Ничего не найдено. Введите корректное значение</div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </span>
              </div>
              <InputForm register={register} placeholder={'№'} type={'frame'} reset={resetField} form={true} />
              <InputForm register={register} placeholder={'№'} type={'room'} reset={resetField} form={true} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ZakazDannie;
