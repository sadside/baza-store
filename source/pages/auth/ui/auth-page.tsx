'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import styles from './auth-page.module.scss';
import axios from 'axios';
import { useUnit } from 'effector-react';
import { useLayoutEffect } from 'react';
import { $user, phoneInputSubmitted } from '@/stores/cart/init';
import { $currentCountryCode, $isSelectCodeOpened } from '@/source/shared/ui/PhoneInput/model/countryCodes';
import { $api, API_URL_CLIENT } from '@shared/api/http/axios-instance';
import { PhoneInput } from '@/source/shared/ui/PhoneInput';
import { Button } from '@/source/shared/theme/button';
import { toast } from 'sonner';

type Props = {};

export type RegisterFormValues = {
  phoneNumber: string;
};

const schema = yup.object().shape({
  phoneNumber: yup.string().required('Введите номер телефона'),
});

export const AuthPage = ({}: Props) => {
  const user = useUnit($user);
  const { push } = useRouter();
  const isSelectOpened = useUnit($isSelectCodeOpened);
  const phoneCode = useUnit($currentCountryCode);

  useLayoutEffect(() => {
    if (user) push('/');
  }, []);

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  //TODO: ВЫНЕСТИ В СТМ

  const onSubmit = handleSubmit(async (data) => {
    const res = await $api.post(`auth/send-code/`, {
      phone: phoneCode + data.phoneNumber,
    });

    if (res.status === 201) {
      phoneInputSubmitted(data.phoneNumber);
      push('/confirm-code');
    }
    if (res.status === 400) toast('Номер телефона не соответствует формату.');
  });

  return (
    <div className={styles.test}>
      <Head>
        <title>Авторизация</title>
      </Head>
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.content}>
            <div className={styles.authTitle}>ВХОД / РЕГИСТРАЦИЯ</div>
            <div style={{ marginBottom: 14 }}>
              <PhoneInput
                style={{ width: '100%' }}
                type="tel"
                error={Boolean(errors?.phoneNumber?.message)}
                register={register}
                name="phoneNumber"
                resetFiled={resetField}
              />
              {errors?.phoneNumber && <div className={styles.errorMessage}>{errors?.phoneNumber?.message}</div>}
            </div>
            <Button.Primary>Далее</Button.Primary>
          </div>
        </form>
      </div>
    </div>
  );
};
