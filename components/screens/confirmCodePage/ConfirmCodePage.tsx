"use client";

import Button from "@/components/ui/button/Button";
import InputCodeMask from "@/components/ui/inputCodeMask/InputCodeMask";
import { $phoneNumber, $user, codeInputSubmitted } from "@/stores/auth/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUnit } from "effector-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import * as yup from "yup";
import styles from "./ConfirmCodePage.module.scss";

interface Props {}

export type ConfirmCodeFormValue = {
  code: string;
};

const schema = yup.object().shape({
  code: yup.string().required("Введите код").min(7, "Длина кода 6 цифр"),
});

const ConfirmCodePage = (props: Props) => {
  const phoneNumber = useUnit($phoneNumber);
  const user = useUnit($user);

  const { push } = useRouter();

  useEffect(() => {
    if (!phoneNumber.length) {
      push("/");
    }
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm<ConfirmCodeFormValue>({ resolver: yupResolver(schema) });

  const onSubmit = handleSubmit(async (data) => {
    const code = data.code.replace("-", "");

    codeInputSubmitted({ phone: phoneNumber, code });

    push("/");
  });

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.content}>
          <div className={styles.authTitle}>ВХОД / РЕГИСТРАЦИЯ</div>
          <div className={styles.subTitle}>
            Введите код, который мы выслали на номер {phoneNumber}
          </div>
          <InputCodeMask
            name="code"
            register={register}
            error={Boolean(errors?.code?.message)}
            resetFiled={resetField}
          />
          {errors?.code && (
            <div className={styles.errorMessage}>{errors?.code?.message}</div>
          )}
          <Button style={{ marginTop: 15 }} text="ДАЛЕЕ" />
        </div>
      </form>
    </div>
  );
};

export default ConfirmCodePage;
