"use client";

import SvgSelector from "@/utils/SvgSelector";

type Props = {};

import styles from "./AddToFavorites.module.scss";
import { useState } from "react";

export const AddToFavorites = (props: Props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const addToFavorites = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <div className={styles.wrapper} onClick={addToFavorites}>
      <SvgSelector
        id={isFavorite ? "favoriteHeart" : "heart"}
        style={{ height: 25, width: 25 }}
      />
    </div>
  );
};
