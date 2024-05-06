'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import classNames from 'classnames';
import { changeVisibleExit } from '@/stores/areYouSure/exit';
import ShowModalMb from '@entities/show-modal-mb/ui/ShowModalMb';
import { Select } from '@shared/ui/select';
import s from './index.module.scss';

const Sidebar = () => {
  const links = [
    { name: 'Доставка', value: '/info/delivery' },
    { name: 'оплата', value: '/info/payment' },
    { name: 'возврат', value: '/info/recovery' },
    { name: 'программа лояльности', value: '/info/baza-loyalty' },
    { name: 'подарочный сертификат', value: '/info/gift-certificates' },
    { name: 'документы', value: '/info/documents' },
    { name: 'контакты', value: '/info/contacts' },
  ];

  const url = usePathname().split('/');
  const value = links.find((v) => v.value === '/' + url[1] + '/' + url[2])?.value;
  const { push } = useRouter();

  return (
    <div className="flex-0">
      <div className="w-[30%] flex flex-col	gap-[16px]  pl-[40px] h-full max-[1050px]:hidden">
        {links.map((link) => {
          return (
            <Link
              className={classNames(
                'w-full uppercase flex justify-start  text-[16px] font-semibold text-nowrap',
                link.value === '/info/' + url[2] ? 'text-black' : 'text-black-200'
              )}
              href={link.value}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className={s.mobile}>
        <Select
          color={'#F0F0F0'}
          options={links}
          value={value ? value : 'Личный кабинет'}
          onChange={
            // @ts-ignore
            (e) => push(e.target.value)
          }
        />
      </div>
    </div>
  );
};

export default Sidebar;
