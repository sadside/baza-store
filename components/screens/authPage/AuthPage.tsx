"use client";

import Button from "@/components/ui/button/Button";
import { InputPhoneMask } from "@/components/ui/inputPhoneMask/InputPhoneMask";
import { $user, phoneInputSubmitted } from "@/stores/auth/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import styles from "./AuthPage.module.scss";
import axios from "axios";
import { useUnit } from "effector-react";
import { useLayoutEffect } from "react";
import { API_URL } from "@/http";

type Props = {};

export type RegisterFormValues = {
  phoneNumber: string;
};

const schema = yup.object().shape({
  phoneNumber: yup.string().required("Введите номер телефона"),
});

const AuthPage = ({}: Props) => {
  const user = useUnit($user);
  const { push } = useRouter();

  useLayoutEffect(() => {
    if (user) push("/");
  }, []);

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = handleSubmit(async (data) => {
    const res = await axios.post(`${API_URL}auth/send-code/`, {
      phone: data.phoneNumber,
    });

    if (res.status === 201) {
      phoneInputSubmitted(data.phoneNumber);
      push("/confirm-code");
    }
    if (res.status === 400) alert("Номер телефона не соответсвует формату.");
  });

  return (
    <div>
      <Head>
        <title>Авторизация</title>
      </Head>
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.content}>
            <div className={styles.authTitle}>ВХОД / РЕГИСТРАЦИЯ</div>
            <InputPhoneMask
              type="tel"
              error={Boolean(errors?.phoneNumber?.message)}
              register={register}
              name="phoneNumber"
              resetFiled={resetField}
            />
            {errors?.phoneNumber && (
              <div className={styles.errorMessage}>
                {errors?.phoneNumber?.message}
              </div>
            )}
            <Button style={{ marginTop: 15 }} text="ДАЛЕЕ" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
