import React from "react";
import Image from "next/image";
import styles from "./Loader.module.scss";
import img from "../../svg-loaders/2.svg";

type Props = {};

export const Loader = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <Image src={img} alt="222" />
    </div>
  );
};
