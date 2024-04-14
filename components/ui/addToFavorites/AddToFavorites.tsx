"use client";

import SvgSelector from "@shared/utils/SvgSelector";
import styles from "./AddToFavorites.module.scss";
import { useEffect, useState } from "react";
import { useUnit } from "effector-react";
import { IFullProduct } from "@shared/types/models/Product";
import {
  $favorites,
  $user,
  addFavorite,
  addFavoriteToServerFx,
  deleteFavoriteToServerFx,
  removeFavorite
} from "@/stores/cart/init";

type Props = {
  product: IFullProduct;
};

export const AddToFavorites = ({ product }: Props) => {
  const user = useUnit($user);

  const favorites = useUnit($favorites);

  const [isFavorite, setFavorite] = useState(false);

  useEffect(() => {
    favorites.forEach((item) => {
      if (item === product.current_color.slug) {
        setFavorite(true);
      }
    });
  }, []);

  const handleClick = () => {
    setFavorite(!isFavorite);

    if (!isFavorite) {
      addFavorite(product.current_color.slug);

      if (user) addFavoriteToServerFx(product.current_color.slug);
    } else {
      removeFavorite(product.current_color.slug);
      if (user) deleteFavoriteToServerFx(product.current_color.slug);
    }
  };

  return (
    <div className={styles.wrapper} onClick={handleClick}>
      <SvgSelector
        id={isFavorite ? "favoriteHeart" : "heart"}
        style={{ height: 25, width: 25 }}
      />
    </div>
  );
};
