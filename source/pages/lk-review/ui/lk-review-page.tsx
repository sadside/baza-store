import s from "./lk-review-page.module.scss";
import { LoyaltyBlock } from "@/components/reviewBlock/LoyaltyBlock";
import { OrderBlock } from "@/components/orderBlock/OrderBlock";
import { InfoBlock } from "@/components/infoBlock/InfoBlock";

export const LkReviewPage = () => {
  return (
    <div className={s.content}>
      <LoyaltyBlock />
      <OrderBlock />
      <InfoBlock />
    </div>
  );
};
