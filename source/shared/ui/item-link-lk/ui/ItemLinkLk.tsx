import React from "react";
import { link } from "@shared/types/models/link";
import Link from "next/link";
import classNames from "classnames";

export const ItemLinkLk = ({ link, active }: { link: link, active: boolean }) => {
  return (
    <Link
      className={classNames("w-full uppercase flex justify-start  text-[16px] font-semibold", active ? "text-black" : "text-black-200")}
      href={"/lk/" + link.href}>
      {link.name}
    </Link>
  );
};

