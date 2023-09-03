import React, {useEffect} from "react";
import Banner from "./banner/Banner";
import WelcomeText from "./welcomeTxt/WelcomeText";
import LcLinks from "../lcLincks/LcLincks";
import s from "./Welcome.module.scss";
import ModalLoyalty from "@/components/modalLoyalty/ModalLoyalty";
import {$orders, getOrders} from "@/stores/order/init";
import {useUnit} from "effector-react";

type Props = {
  children: any;
};
const Welcome = ({ children }: Props) => {

    const orders = useUnit($orders)

    useEffect(() => {
        if (!orders.length) getOrders();
    });

    return (
    <div className={s.wrapper}>
      <Banner />
      <WelcomeText />
      <LcLinks />
      <div className={s.content}>
        <ModalLoyalty />
        {children}
      </div>
    </div>
  );
};

export default Welcome;
