import React from "react";
import Banner from "./banner/Banner";
import WelcomeText from "./welcomeTxt/WelcomeText";
import LcLinks from "../lcLincks/LcLincks";
import s from "./Welcome.module.scss";
import ModalLoyalty from "@/components/modalLoyalty/ModalLoyalty";

type Props = {
  children: any;
};
const Welcome = ({ children }: Props) => {
  return (
    <>
      <Banner />
      <WelcomeText />
      <LcLinks />
      <div className={s.content}>
        <ModalLoyalty />
        {children}
      </div>
    </>
  );
};

export default Welcome;
