import React, { useState } from "react";
import SvgSelector from "@shared/utils/SvgSelector";
import { ItemHistory } from "@shared/ui/item-history-loyalty";
import Link from "next/link";
import { useUnit } from "effector-react";
import { $loyaltyHistory } from "@entities/loyalty/model/loyalty-model";
import { AnimatePresence, motion } from "framer-motion";

export const HistoryLoyalty = () => {
  const loyaltyHistory = useUnit($loyaltyHistory);
  const [visible, setVisible] = useState(false);
  return (
    <div className="mt-5">
      <div className=" flex justify-between ">
        <div className="font-medium uppercase text-[14px]">История баллов</div>
        <button onClick={() => setVisible(!visible)}>
          {!visible ?
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.1582 13.3372L4.98486 6.16466L6.1632 4.98633L13.3357 12.158V5.83716H15.0024V15.0038H5.8357V13.3372H12.1582Z"
                fill="#777777"
              />
            </svg>
            : <SvgSelector id={"arrow"} />}
        </button>
      </div>
      <AnimatePresence>
        {visible && (
          <motion.div
            animate={{ height: "auto" }}
            initial={{ height: "0" }}
            exit={{ height: "0" }}
            transition={{ duration: 0.4 }}
            style={{ overflow: "hidden" }}
          >
            <div className="mt-5">
              {loyaltyHistory && loyaltyHistory?.length > 0 ? (
                <>
                  <div className="uppercase font-medium text-[12px] grid grid-cols-4">
                    <div className="text-center">Дата и время</div>
                    <div className="text-center">Операция</div>
                    <div className="text-center">История</div>
                    <div className="text-center">итого</div>
                  </div>
                  {loyaltyHistory?.map((item) => <ItemHistory historyItem={item} key={item.user_id} />)}
                </>
              ) : (
                <div className="h-[56px] flex items-center justify-center">
                  <p className="uppercase text-black-100">История отсутствует</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="text-black-200 text-[12px] mt-5">
        Узнайте больше о программе лояльности и условиях получения бонусов на{" "}
        <Link className="text-black" href="/info/baza-loyalty">
          специальной странице.
        </Link>
      </div>
    </div>
  );
};
