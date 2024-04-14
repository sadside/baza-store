import { BonusLoyalty } from "@entities/bonus-loyalty";
import { StatusLoyalty } from "@entities/status-loyalty";
import SvgSelector from "@shared/utils/SvgSelector";
import { HistoryLoyalty } from "@entities/history-loyalty";

export const LoyaltyPage = () => {
  const bonus = {
    status: "Gold",
    active: 294,
    await: 52
  };
  return (
    <div>
      <BonusLoyalty bonus={bonus} />
      <StatusLoyalty status={bonus.status} />
      <div
        className="mt-5 max-[785px]:px-[10px] w-full bg-lightGray justify-between max-[785px]:flex-col gap-[18px]  flex">
        <div
          className=" max-[785px]:w-[100%] max-[785px]:mt-[10px]  flex justify-center items-center w-[20%] h-[15vh] bg-backBazaLogo">
          <span className="opacity-[100%]"><SvgSelector id={"baza-icon"} /></span></div>
        <div className="flex flex-col  max-[785px]:justify-center w-[100%] justify-around">
          <div className="text-black-400 flex font-medium uppercase max-[785px]:justify-center ">Получите 300 бонусов
          </div>
          <div className="  w-[98%] text-black-200  max-[785px]:text-center "><span className="text-black-400">Добавьте карту</span> в
            телефон, чтобы удобно следить за бонусами, получать уведомления о новых акциях и скидках.
          </div>
        </div>
      </div>
      <HistoryLoyalty />
    </div>
  );
};
