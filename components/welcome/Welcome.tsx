import React from "react";
import Banner from "./banner/Banner";
import WelcomeText from "./welcomeTxt/WelcomeText";

import s from "./Welcome.module.scss";
import LcLinks from "../lcLincks/LcLincks";
import ModalLoyalty from "../modalLoyalty/ModalLoyalty";

type Props = {
  children: any;
};
const Welcome = ({ children }: Props) => {
  return (
    <>
      <Banner />
      <WelcomeText />
      <div className={s.content}>
        <LcLinks />
        <ModalLoyalty />
        {children}
      </div>
    </>
  );
};

export default Welcome;
