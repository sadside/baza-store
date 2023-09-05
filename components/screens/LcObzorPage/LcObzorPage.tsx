import React, { useEffect } from "react";
import s from "./LcObzorPage.module.scss";
import Welcome from "@/components/welcome/Welcome";
import { LoyaltyBlock } from "@/components/reviewBlock/LoyaltyBlock";
import { OrderBlock } from "@/components/orderBlock/OrderBlock";
import { InfoBlock } from "@/components/infoBlock/InfoBlock";
import { $orders, getOrders } from "@/stores/order/init";
import { useUnit } from "effector-react";

const LcObzorPage = () => {
  return (
    <div className={s.content}>
      <LoyaltyBlock />
      <OrderBlock />
      <InfoBlock />
    </div>
  );
};

export default LcObzorPage;
