'use client';

import { useUnit } from 'effector-react';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useRef } from 'react';
import * as yup from 'yup';
import styles from './confirm-code-page.module.scss';
import { $codeDigits } from '@/stores/auth/auth';
import { Button } from '@/source/shared/theme/button';
import { $fullPhoneNumber } from '@/source/features/auth/model/auth';
import { CodeInputs } from '@/source/entities/Auth/ui/CodeInputs';
import { $user, codeInputSubmitted } from '@entities/user/model/user-model';

interface Props {}

export type ConfirmCodeFormValue = {
  code: string;
};

const schema = yup.object().shape({
  code: yup.string().required('Введите код').min(7, 'Длина кода 6 цифр'),
});

export const ConfirmCodePage = (props: Props) => {
  const phoneNumber = useUnit($fullPhoneNumber);
  const user = useUnit($user);
  const code = useUnit($codeDigits);

  const { push } = useRouter();

  useEffect(() => {
    if (!phoneNumber.phoneNumber.length) {
      push('/');
    }
  }, []);

  if (user) push('/');

  const handleSubmit = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    codeInputSubmitted({ phone: phoneNumber.phoneNumber, code });
  };

  const firstInputRef = useRef();

  return (
    <div className={styles.wrapper} onSubmit={handleSubmit}>
      <form className={styles.form}>
        <div className={styles.content}>
          <div className={styles.authTitle}>ВХОД / РЕГИСТРАЦИЯ</div>
          <div className={styles.subTitle}>
            Введите код, который мы выслали на номер {phoneNumber.code + ' ' + phoneNumber.phoneNumber}
          </div>
          <CodeInputs ref={firstInputRef} />
          <Button.Primary style={{ marginTop: 15 }}>далее</Button.Primary>
        </div>
      </form>
    </div>
  );
};
