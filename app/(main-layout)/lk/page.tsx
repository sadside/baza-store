import React from "react";
import { LoyaltySmallMenu } from "@entities/loyalty-menu";
import { LkActualOrders } from "@widgets/lk-actual-order";
import { LkFavourite } from "@widgets/lk-favourite";

const Page = () => {
  return (
    <div>
      <LoyaltySmallMenu />
      <div className="mt-5"></div>
      <LkActualOrders />
      <div className="mt-5"></div>
      <LkFavourite />
    </div>
  );
};

export default Page;
