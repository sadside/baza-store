import { AddToFavorites } from '../ui/addToFavorites/AddToFavorites';
import styles from './MainInfoProduct.module.scss';
import { IFullProduct } from '@shared/types/models/Product';
import Image from 'next/image';
import partsLogo from '@shared/assets/dolyami-small-logo.svg';
import { Dialog, DialogContent } from '@shared/ui/shadcn/ui/dialog';
import { useUnit } from 'effector-react';
import {
  $partsDesktopModalIsVisible,
  $partsMobileModalIsVisible,
  partsModalStateChanged,
} from '@entities/product/model/product-model';
import { add, format, hoursToMilliseconds, startOfDay } from 'date-fns';

import ru from 'date-fns/locale/ru';
import { Button } from '@shared/theme/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@shared/ui/shadcn/ui/drawer';

type Props = {
  product: IFullProduct;
};

const PartsModal = ({ price }: { price: number }) => {
  const isVisible = useUnit($partsDesktopModalIsVisible);

  return (
    <Dialog open={isVisible} onOpenChange={(val) => partsModalStateChanged(val)}>
      <DialogContent className="max-w-[600px]">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Оплатите 25% от стоимости покупки</h1>
          <p className="text-[12px] text-black-200 mb-5">
            Оставшиеся 3 части спишутся автоматически с шагом в две недели
          </p>
          <div className="flex justify-between items-center mb-5 text-[14px]">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-[2px] bg-[#f9f5fa] flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.86686 6.46667C9.18556 6.46667 9.47386 6.65583 9.60073 6.94819L11.2505 10.7497L15.052 12.3995C15.3444 12.5263 15.5335 12.8146 15.5335 13.1333C15.5335 13.452 15.3444 13.7403 15.052 13.8672L11.2505 15.517L9.60073 19.3185C9.47386 19.6108 9.18556 19.8 8.86686 19.8C8.54817 19.8 8.25987 19.6108 8.13299 19.3185L6.48321 15.517L2.68171 13.8672C2.38936 13.7403 2.2002 13.452 2.2002 13.1333C2.2002 12.8146 2.38936 12.5263 2.68171 12.3995L6.48321 10.7497L8.13299 6.94819C8.25987 6.65583 8.54817 6.46667 8.86686 6.46667ZM8.86686 9.27617L7.82523 11.6763C7.74446 11.8625 7.59598 12.0109 7.40985 12.0917L5.00969 13.1333L7.40985 14.175C7.59598 14.2557 7.74446 14.4042 7.82523 14.5904L8.86686 16.9905L9.90849 14.5904C9.98927 14.4042 10.1377 14.2557 10.3239 14.175L12.724 13.1333L10.3239 12.0917C10.1377 12.0109 9.98927 11.8625 9.90849 11.6763L8.86686 9.27617Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.5333 1.6665C15.852 1.6665 16.1403 1.85566 16.2671 2.14802L17.1906 4.27585L19.3184 5.1993C19.6108 5.32618 19.7999 5.61447 19.7999 5.93317C19.7999 6.25187 19.6108 6.54017 19.3184 6.66704L17.1906 7.59049L16.2671 9.71832C16.1403 10.0107 15.852 10.1998 15.5333 10.1998C15.2146 10.1998 14.9263 10.0107 14.7994 9.71833L13.876 7.59049L11.7481 6.66704C11.4558 6.54017 11.2666 6.25187 11.2666 5.93317C11.2666 5.61447 11.4558 5.32618 11.7481 5.1993L13.876 4.27585L14.7994 2.14802C14.9263 1.85566 15.2146 1.6665 15.5333 1.6665ZM15.5333 4.476L15.218 5.2025C15.1372 5.38863 14.9887 5.53711 14.8026 5.61788L14.0761 5.93317L14.8026 6.24846C14.9887 6.32923 15.1372 6.47771 15.218 6.66384L15.5333 7.39034L15.8486 6.66384C15.9293 6.47771 16.0778 6.32923 16.2639 6.24846L16.9904 5.93317L16.2639 5.61788C16.0778 5.53711 15.9293 5.38863 15.8486 5.2025L15.5333 4.476Z"
                    fill="#B182BC"
                  />
                </svg>
              </div>
              <p className="text-[14px]">Без процентов и комиссий</p>
            </div>
            <div className="flex items-center gap-3">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.08" width="32" height="32" rx="4" fill="#6F99C6" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.4004 16C18.4004 15.5582 18.7586 15.2 19.2004 15.2C20.5222 15.2 21.6004 16.2782 21.6004 17.6C21.6004 18.9218 20.5222 20 19.2004 20C18.7586 20 18.4004 19.6418 18.4004 19.2C18.4004 18.7582 18.7586 18.4 19.2004 18.4C19.6386 18.4 20.0004 18.0382 20.0004 17.6C20.0004 17.1618 19.6386 16.8 19.2004 16.8C18.7586 16.8 18.4004 16.4418 18.4004 16Z"
                  fill="#6F99C6"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.4669 20.8V11.2C23.4669 10.6109 22.9894 10.1334 22.4003 10.1334H9.60026C9.01116 10.1334 8.53359 10.6109 8.53359 11.2V20.8C8.53359 21.3891 9.01116 21.8667 9.60026 21.8667H22.4003C22.9894 21.8667 23.4669 21.3891 23.4669 20.8ZM9.60026 8.53336C8.1275 8.53336 6.93359 9.72726 6.93359 11.2V20.8C6.93359 22.2728 8.1275 23.4667 9.60026 23.4667H22.4003C23.873 23.4667 25.0669 22.2728 25.0669 20.8V11.2C25.0669 9.72726 23.873 8.53336 22.4003 8.53336H9.60026Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.46693 12.5334C7.46693 12.0915 7.8251 11.7334 8.26693 11.7334L21.0669 11.7334C21.5088 11.7334 21.8669 12.0915 21.8669 12.5334C21.8669 12.9752 21.5088 13.3334 21.0669 13.3334L8.26693 13.3334C7.8251 13.3334 7.46693 12.9752 7.46693 12.5334Z"
                  fill="black"
                />
              </svg>

              <p className="text-[14px]">Как обычная оплата картой</p>
            </div>
          </div>
          <div className="bg-[#f6f7f8] rounded-[8px] p-4 flex items-center justify-between gap-[6px] mb-4">
            <div className="w-full">
              <div className="mb-1 text-[12px]">Сегодня</div>
              <div className="text-[12px] font-semibold mb-3">{price / 400} ₽</div>
              <div className="bg-[#428BF9] rounded-[6px] h-1.5 w-full animate-pulse"></div>
            </div>
            <div className="w-full text-black-200">
              <div className="mb-1 text-[12px]">
                {format(new Date(add(new Date(), { days: 14 })), 'dd MMM', {
                  //@ts-ignore
                  locale: ru,
                })}
              </div>
              <div className="text-[12px] font-semibold mb-3">{price / 400} ₽</div>
              <div className="bg-[#d8d9da] rounded-[6px] h-1.5 w-full"></div>
            </div>
            <div className="w-full text-black-200">
              <div className="mb-1 text-[12px]">
                {format(new Date(add(new Date(), { days: 28 })), 'dd MMM', {
                  //@ts-ignore
                  locale: ru,
                })}
              </div>
              <div className="text-[12px] font-semibold mb-3">{price / 400} ₽</div>
              <div className="bg-[#d8d9da] rounded-[6px] h-1.5 w-full"></div>
            </div>
            <div className="w-full text-black-200">
              <div className="mb-1 text-[12px]">
                {format(new Date(add(new Date(), { days: 42 })), 'dd MMM', {
                  //@ts-ignore
                  locale: ru,
                })}
              </div>
              <div className="text-[12px] font-semibold mb-3">{price / 400} ₽</div>
              <div className="bg-[#d8d9da] rounded-[6px] h-1.5 w-full"></div>
            </div>
          </div>
          <Button.Primary className="rounded-[12px] mb-5">
            <div className="flex w-full justify-center items-center gap-2">
              <div className="font-medium">ОПЛАТИТЬ</div>
              <svg width="102" height="16" viewBox="0 0 102 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.3906 0.799988H15.988V12.984H18.3906V0.799988Z" fill="white" />
                <path d="M13.228 1.48176H10.8253V13.6655H13.228V1.48176Z" fill="white" />
                <path d="M8.06533 2.2429H5.66266V14.4289H8.06533V2.2429Z" fill="white" />
                <path d="M2.90267 3.01249H0.5L0.500009 15.2H2.90268L2.90267 3.01249Z" fill="white" />
                <path
                  d="M81.8492 7.29121L77.9806 2.98991H75.7189V12.9489H78.0803V6.59488L81.6122 10.3594H82.0487L85.5199 6.59488V12.9489H87.8812V2.98991H85.6196L81.8492 7.29121Z"
                  fill="white"
                />
                <path
                  d="M99.1312 2.98991L93.2784 9.46289V2.98991H90.917V12.9489H93.0804L98.9332 6.47592V12.9489H101.295V2.98991H99.1312Z"
                  fill="white"
                />
                <path
                  d="M63 6.63404C63 8.21965 63.8671 9.46869 65.1981 9.99239L62.7023 12.9489H65.5926L67.8629 10.2593H70.3197V12.9489H72.681V2.98991H66.6693C64.4278 2.98991 63 4.52329 63 6.63404ZM70.3211 5.18335V8.12825H67.1071C66.0348 8.12825 65.4597 7.53057 65.4597 6.65435C65.4597 5.77814 66.0551 5.18045 67.1071 5.18045L70.3211 5.18335Z"
                  fill="white"
                />
                <path
                  d="M52.0269 4.98171C51.8824 8.40679 51.1599 10.6176 49.7451 10.6176H49.391V13.0084L49.7682 13.0287C52.605 13.1868 54.173 10.6974 54.4302 5.26024H58.1616V12.9489H60.5186V2.98991H52.1064L52.0269 4.98171Z"
                  fill="white"
                />
                <path
                  d="M43.138 2.85077C39.9443 2.85077 37.6465 5.06162 37.6465 7.9688C37.6465 10.9761 40.1466 13.1086 43.138 13.1086C46.2537 13.1086 48.6743 10.8571 48.6743 7.9688C48.6743 5.08048 46.2537 2.85077 43.138 2.85077ZM43.138 10.7179C41.333 10.7179 40.1032 9.5428 40.1032 7.9688C40.1032 6.35564 41.3345 5.21249 43.138 5.21249C44.9415 5.21249 46.2133 6.40786 46.2133 7.9688C46.2133 9.52975 44.9242 10.7179 43.138 10.7179Z"
                  fill="white"
                />
                <path
                  d="M35.1421 3.0087H26.808L26.7285 5.0005C26.61 7.86996 25.8614 10.5987 24.4466 10.6379L23.792 10.6582V15.1999L26.1736 15.1951V12.9503H34.447V15.1951H36.8488V10.6379H35.1421V3.0087ZM32.7808 10.6379H27.7416C28.5942 9.34386 29.0508 7.47102 29.1303 5.28048H32.7808V10.6379Z"
                  fill="white"
                />
              </svg>
            </div>
          </Button.Primary>
          <p className="text-center text-black-200 text-[12px]">
            Подробнее о сервисе можно узнать на
            <a href="https://dolyame.ru/" target="_blank" className="text-[#003EB7]">
              {' '}
              dolyame.ru
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const PartsMobileModal = ({ price }: { price: number }) => {
  const isVisible = useUnit($partsMobileModalIsVisible);

  return (
    <Drawer open={isVisible} onOpenChange={(val) => partsModalStateChanged(val)}>
      <DrawerContent>
        <div className="my-4 mx-4">
          <h1 className="text-2xl font-semibold mb-2">Оплатите 25% от стоимости покупки</h1>
          <p className="text-[12px] text-black-200 mb-5">
            Оставшиеся 3 части спишутся автоматически с шагом в две недели
          </p>
          <div className="flex justify-between items-center mb-5 text-[14px] flex-wrap">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-8 w-8 rounded-[2px] bg-[#f9f5fa] flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.86686 6.46667C9.18556 6.46667 9.47386 6.65583 9.60073 6.94819L11.2505 10.7497L15.052 12.3995C15.3444 12.5263 15.5335 12.8146 15.5335 13.1333C15.5335 13.452 15.3444 13.7403 15.052 13.8672L11.2505 15.517L9.60073 19.3185C9.47386 19.6108 9.18556 19.8 8.86686 19.8C8.54817 19.8 8.25987 19.6108 8.13299 19.3185L6.48321 15.517L2.68171 13.8672C2.38936 13.7403 2.2002 13.452 2.2002 13.1333C2.2002 12.8146 2.38936 12.5263 2.68171 12.3995L6.48321 10.7497L8.13299 6.94819C8.25987 6.65583 8.54817 6.46667 8.86686 6.46667ZM8.86686 9.27617L7.82523 11.6763C7.74446 11.8625 7.59598 12.0109 7.40985 12.0917L5.00969 13.1333L7.40985 14.175C7.59598 14.2557 7.74446 14.4042 7.82523 14.5904L8.86686 16.9905L9.90849 14.5904C9.98927 14.4042 10.1377 14.2557 10.3239 14.175L12.724 13.1333L10.3239 12.0917C10.1377 12.0109 9.98927 11.8625 9.90849 11.6763L8.86686 9.27617Z"
                    fill="black"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.5333 1.6665C15.852 1.6665 16.1403 1.85566 16.2671 2.14802L17.1906 4.27585L19.3184 5.1993C19.6108 5.32618 19.7999 5.61447 19.7999 5.93317C19.7999 6.25187 19.6108 6.54017 19.3184 6.66704L17.1906 7.59049L16.2671 9.71832C16.1403 10.0107 15.852 10.1998 15.5333 10.1998C15.2146 10.1998 14.9263 10.0107 14.7994 9.71833L13.876 7.59049L11.7481 6.66704C11.4558 6.54017 11.2666 6.25187 11.2666 5.93317C11.2666 5.61447 11.4558 5.32618 11.7481 5.1993L13.876 4.27585L14.7994 2.14802C14.9263 1.85566 15.2146 1.6665 15.5333 1.6665ZM15.5333 4.476L15.218 5.2025C15.1372 5.38863 14.9887 5.53711 14.8026 5.61788L14.0761 5.93317L14.8026 6.24846C14.9887 6.32923 15.1372 6.47771 15.218 6.66384L15.5333 7.39034L15.8486 6.66384C15.9293 6.47771 16.0778 6.32923 16.2639 6.24846L16.9904 5.93317L16.2639 5.61788C16.0778 5.53711 15.9293 5.38863 15.8486 5.2025L15.5333 4.476Z"
                    fill="#B182BC"
                  />
                </svg>
              </div>
              <p className="text-[14px]">Без процентов и комиссий</p>
            </div>
            <div className="flex items-center gap-3">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.08" width="32" height="32" rx="4" fill="#6F99C6" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.4004 16C18.4004 15.5582 18.7586 15.2 19.2004 15.2C20.5222 15.2 21.6004 16.2782 21.6004 17.6C21.6004 18.9218 20.5222 20 19.2004 20C18.7586 20 18.4004 19.6418 18.4004 19.2C18.4004 18.7582 18.7586 18.4 19.2004 18.4C19.6386 18.4 20.0004 18.0382 20.0004 17.6C20.0004 17.1618 19.6386 16.8 19.2004 16.8C18.7586 16.8 18.4004 16.4418 18.4004 16Z"
                  fill="#6F99C6"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.4669 20.8V11.2C23.4669 10.6109 22.9894 10.1334 22.4003 10.1334H9.60026C9.01116 10.1334 8.53359 10.6109 8.53359 11.2V20.8C8.53359 21.3891 9.01116 21.8667 9.60026 21.8667H22.4003C22.9894 21.8667 23.4669 21.3891 23.4669 20.8ZM9.60026 8.53336C8.1275 8.53336 6.93359 9.72726 6.93359 11.2V20.8C6.93359 22.2728 8.1275 23.4667 9.60026 23.4667H22.4003C23.873 23.4667 25.0669 22.2728 25.0669 20.8V11.2C25.0669 9.72726 23.873 8.53336 22.4003 8.53336H9.60026Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.46693 12.5334C7.46693 12.0915 7.8251 11.7334 8.26693 11.7334L21.0669 11.7334C21.5088 11.7334 21.8669 12.0915 21.8669 12.5334C21.8669 12.9752 21.5088 13.3334 21.0669 13.3334L8.26693 13.3334C7.8251 13.3334 7.46693 12.9752 7.46693 12.5334Z"
                  fill="black"
                />
              </svg>

              <p className="text-[14px]">Как обычная оплата картой</p>
            </div>
          </div>
          <div className="bg-[#f6f7f8] rounded-[8px] p-4 flex items-center justify-between gap-[6px] mb-4">
            <div className="w-full">
              <div className="mb-1 text-[12px]">Сегодня</div>
              <div className="text-[12px] font-semibold mb-3">{price / 400} ₽</div>
              <div className="bg-[#428BF9] rounded-[6px] h-1.5 w-full animate-pulse"></div>
            </div>
            <div className="w-full text-black-200">
              <div className="mb-1 text-[12px]">
                {format(new Date(add(new Date(), { days: 14 })), 'dd MMM', {
                  //@ts-ignore
                  locale: ru,
                })}
              </div>
              <div className="text-[12px] font-semibold mb-3">{price / 400} ₽</div>
              <div className="bg-[#d8d9da] rounded-[6px] h-1.5 w-full"></div>
            </div>
            <div className="w-full text-black-200">
              <div className="mb-1 text-[12px]">
                {format(new Date(add(new Date(), { days: 28 })), 'dd MMM', {
                  //@ts-ignore
                  locale: ru,
                })}
              </div>
              <div className="text-[12px] font-semibold mb-3">{price / 400} ₽</div>
              <div className="bg-[#d8d9da] rounded-[6px] h-1.5 w-full"></div>
            </div>
            <div className="w-full text-black-200">
              <div className="mb-1 text-[12px]">
                {format(new Date(add(new Date(), { days: 42 })), 'dd MMM', {
                  //@ts-ignore
                  locale: ru,
                })}
              </div>
              <div className="text-[12px] font-semibold mb-3">{price / 400} ₽</div>
              <div className="bg-[#d8d9da] rounded-[6px] h-1.5 w-full"></div>
            </div>
          </div>
          <Button.Primary className="rounded-[12px] mb-5">
            <div className="flex w-full justify-center items-center gap-2">
              <div className="font-medium">ОПЛАТИТЬ</div>
              <svg width="102" height="16" viewBox="0 0 102 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.3906 0.799988H15.988V12.984H18.3906V0.799988Z" fill="white" />
                <path d="M13.228 1.48176H10.8253V13.6655H13.228V1.48176Z" fill="white" />
                <path d="M8.06533 2.2429H5.66266V14.4289H8.06533V2.2429Z" fill="white" />
                <path d="M2.90267 3.01249H0.5L0.500009 15.2H2.90268L2.90267 3.01249Z" fill="white" />
                <path
                  d="M81.8492 7.29121L77.9806 2.98991H75.7189V12.9489H78.0803V6.59488L81.6122 10.3594H82.0487L85.5199 6.59488V12.9489H87.8812V2.98991H85.6196L81.8492 7.29121Z"
                  fill="white"
                />
                <path
                  d="M99.1312 2.98991L93.2784 9.46289V2.98991H90.917V12.9489H93.0804L98.9332 6.47592V12.9489H101.295V2.98991H99.1312Z"
                  fill="white"
                />
                <path
                  d="M63 6.63404C63 8.21965 63.8671 9.46869 65.1981 9.99239L62.7023 12.9489H65.5926L67.8629 10.2593H70.3197V12.9489H72.681V2.98991H66.6693C64.4278 2.98991 63 4.52329 63 6.63404ZM70.3211 5.18335V8.12825H67.1071C66.0348 8.12825 65.4597 7.53057 65.4597 6.65435C65.4597 5.77814 66.0551 5.18045 67.1071 5.18045L70.3211 5.18335Z"
                  fill="white"
                />
                <path
                  d="M52.0269 4.98171C51.8824 8.40679 51.1599 10.6176 49.7451 10.6176H49.391V13.0084L49.7682 13.0287C52.605 13.1868 54.173 10.6974 54.4302 5.26024H58.1616V12.9489H60.5186V2.98991H52.1064L52.0269 4.98171Z"
                  fill="white"
                />
                <path
                  d="M43.138 2.85077C39.9443 2.85077 37.6465 5.06162 37.6465 7.9688C37.6465 10.9761 40.1466 13.1086 43.138 13.1086C46.2537 13.1086 48.6743 10.8571 48.6743 7.9688C48.6743 5.08048 46.2537 2.85077 43.138 2.85077ZM43.138 10.7179C41.333 10.7179 40.1032 9.5428 40.1032 7.9688C40.1032 6.35564 41.3345 5.21249 43.138 5.21249C44.9415 5.21249 46.2133 6.40786 46.2133 7.9688C46.2133 9.52975 44.9242 10.7179 43.138 10.7179Z"
                  fill="white"
                />
                <path
                  d="M35.1421 3.0087H26.808L26.7285 5.0005C26.61 7.86996 25.8614 10.5987 24.4466 10.6379L23.792 10.6582V15.1999L26.1736 15.1951V12.9503H34.447V15.1951H36.8488V10.6379H35.1421V3.0087ZM32.7808 10.6379H27.7416C28.5942 9.34386 29.0508 7.47102 29.1303 5.28048H32.7808V10.6379Z"
                  fill="white"
                />
              </svg>
            </div>
          </Button.Primary>
          <p className="text-center text-black-200 text-[12px]">
            Подробности на
            <a href="https://dolyame.ru/" target="_blank" className="text-[#003EB7]">
              {' '}
              dolyame.ru
            </a>
          </p>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export const MainInfoProduct = ({ product }: Props) => {
  return (
    <>
      <PartsModal price={product.price} />
      <PartsMobileModal price={product.price} />
      <div className={styles.wrapper}>
        <div className={styles.productName}>
          <div className={styles.name}>{`${product.name} ${product.current_color.eng_name}`}</div>
          <AddToFavorites product={product} />
        </div>
        <button className="flex gap-5 mb-6 items-center cursor-pointer">
          <div className={styles.price}>{product.price / 100} ₽</div>
          <div
            className="border border-black rounded-[8px] p-2 text-[12px] flex gap-[6px] hover:animate-pulse"
            onClick={() => partsModalStateChanged(true)}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="16" height="16" rx="8" fill="black" />
              <g clipPath="url(#clip0_2382_10674)">
                <path d="M12.5 4.37793H11.2913V10.5071H12.5V4.37793Z" fill="white" />
                <path d="M9.90289 4.7209H8.69421V10.85H9.90289V4.7209Z" fill="white" />
                <path d="M7.30579 5.10379H6.09711V11.234H7.30579V5.10379Z" fill="white" />
                <path d="M4.70868 5.49094H3.5L3.5 11.6219H4.70868L4.70868 5.49094Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_2382_10674">
                  <rect width="9" height="9" fill="white" transform="translate(3.5 3.5)" />
                </clipPath>
              </defs>
            </svg>
            Частями по {product.price / 400} ₽
          </div>
        </button>
      </div>
    </>
  );
};
