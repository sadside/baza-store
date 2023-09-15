import React from "react";
import s from "./Photo.module.scss";
import photo from "../../../assets/Men.jpg";
import Image from "next/image";

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
