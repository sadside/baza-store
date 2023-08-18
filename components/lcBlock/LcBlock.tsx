"use client";

import React from "react";
import s from "./LcBlock.module.scss";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { convertTypeOfObzor } from "@/utils/convertTypeOfObzor";
import { clickOpen } from "@/stores/modal/init";

type item = {
  name: string;
  val: string;
};
export type Props = {
  o: ObjLc;
};
export type ObjLc = {
  type: string;
  strokes: item[];
};

const LcBlock = ({ o }: Props) => {
  const router = useRouter();
  const { strokes } = { ...o };
  const { title, bottom, info } = { ...convertTypeOfObzor(o.type) };
  const { color, data, rub } = { ...info };
  const Rub = (
    color: boolean | undefined,
    i: number,
    rub: boolean | undefined
  ) => {
    if (rub) {
      return true;
    }
    return !!(color && i === 1);
  };

  return (
    <div className={s.block}>
      <div className={s.content}>
        <div className={s.title}>{title}</div>
        {strokes.map((str, i) => {
          return (
            <div className={s.line} key={str.name}>
              <span>{str.name}:</span>
              <span
                suppressHydrationWarning
                className={classNames(
                  s.right,
                  color && i === 2 && str.val === "доставлен"
                    ? s.green
                    : str.val === "отказано"
                    ? s.red
                    : undefined,
                  data && i === 0 && s.data
                )}
              >
                {str.val}
              </span>
            </div>
          );
        })}
      </div>
      <div
        className={s.bottom}
        onClick={() => {
          let path = window.location.pathname;
          path = path.split("/")[2];
          if (o.type === "baza") {
            if (path === "baza-loyalty") {
              clickOpen();
            } else router.push("/lk/baza-loyalty");
          } else if (o.type === "zakaz") {
            router.push("/lk/order");
          } else if (o.type === "info") {
            router.push("/lk/info");
          }
        }}
      >
        {bottom}
      </div>
    </div>
  );
};

export default LcBlock;
