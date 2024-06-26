"use client";
import React from "react";
import { ItemLinkLk } from "@shared/ui/item-link-lk";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import classNames from "classnames";
import { changeVisibleExit } from "@/stores/areYouSure/exit";
import ShowModalMb from "@entities/show-modal-mb/ui/ShowModalMb";
import { Select } from "@shared/ui/select";
import s from "./index.module.scss";
import { logoutFx } from "@entities/user/model/user-model";

const Sidebar = () => {
  const { push } = useRouter();
  const links = [
    { name: "избранное", href: "favourite" },
    { name: "Заказы", href: "orders" },
    { name: "LOYALTY", href: "baza-loyalty" },
    { name: "профиль", href: "profile" },
    { name: "адреса", href: "addresses" }
  ];
  const options = [
    { name: "Личный кабинет", value: "/lk" },
    { name: "избранное", value: "/lk/favourite" },
    { name: "Заказы", value: "/lk/orders" },
    { name: "LOYALTY", value: "/lk/baza-loyalty" },
    { name: "профиль", value: "/lk/profile" },
    { name: "адреса", value: "/lk/addresses" },
    { name: "Выход", value: "", btn: true }
  ];
  const url = usePathname().split("/");
  const value = options.find((v) => v.value === "/" + url[1] + "/" + url[2])?.name;

  return (
    <>
      <ShowModalMb
        text="выйти из учетной записи?"
        func={() => {
          changeVisibleExit(false);
          logoutFx();
        }}
      />
      <div className="w-[20%] flex flex-col	gap-[16px]  pl-[40px] h-full max-[1050px]:hidden">
        <Link
          className={classNames(
            "w-full uppercase  flex justify-start  text-[14px] font-semibold",
            !url[2] && url[1] === "lk" ? "text-black" : "text-black-200"
          )}
          href="/lk"
        >
          Личный кабинет
        </Link>
        {links.map((l) => (
          <ItemLinkLk key={l.href} link={l} active={url[2] === l.href} />
        ))}
        <button
          onClick={() => {
            changeVisibleExit(true);
          }}
          className="w-full uppercase flex justify-start text-black-200  text-[14px] font-semibold"
        >
          Выйти
        </button>
      </div>
      <div className={s.mobile}>

        <Select
          color={true}
          options={options}
          value={value ? value : "Личный кабинет"}
          onChange={(e: string) => (e !== "" ? push(e) : changeVisibleExit(true))}
        />
      </div>
    </>
  );
};

export default Sidebar;
