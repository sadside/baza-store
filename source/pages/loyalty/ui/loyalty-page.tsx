import s from "./loyalty-page.module.scss";
import { LoyaltyBlock } from "@/components/reviewBlock/LoyaltyBlock";

export const LoyaltyPage = () => {
  return (
    <div className={s.content}>
      <LoyaltyBlock />
    </div>
  );
};
