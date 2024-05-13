import Image from "next/image";
import store from "@shared/assets/store.png";

export const InShop = () => {
  return (
    <div className="max-w-[544px] max-[550px]:mt-5 flex border border-black-50 mt-2.5">
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          <h2 className="font-semibold text-[14px]">BAZA</h2>
          <p className="text-[12px] mt-2.5">
            Оренбург, Поляничко 9 <br /> 09:00 - 20:00
          </p>
        </div>
        <p className="text-[12px] text-red">Мы оповестим Вас о готовности заказа</p>
      </div>
      <div className="">
        <Image src={store} alt="" />
      </div>
    </div>
  );
};
