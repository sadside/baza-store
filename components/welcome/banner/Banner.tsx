import React from "react";
import s from "./Banner.module.scss";
import banner from "../../../assets/banner.jpg";
import Image from "next/image";

const Banner = () => {

  return (
    <div className={s.banner}>
      <Image src={banner} alt="Баннер" className={s.img} />
      <div className={s.txt}>МОЙ АККАУНТ</div>
    </div>
  );
};

export default Banner;
