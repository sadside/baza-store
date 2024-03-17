import React from "react";
import s from "./Photo.module.scss";
import Image from "next/image";
import photo from "@/source/shared/assets/Men.jpg";

const Photo = () => {
  return (
    <Image
      className={s.photo}
      alt="sss"
      src={photo}
      priority={true}
      height={900}
    />
  );
};

export default Photo;
