"use client";

import SvgSelector from "@/utils/SvgSelector";

type Props = {
  product: IFullProduct;
};

import styles from "./AddToFavorites.module.scss";
import { useEffect, useState } from "react";
import { IProduct } from "@/components/productItem/productItem.interface";
import { useUnit } from "effector-react";
import {
  $selectedColor,
  $selectedSize,
} from "@/stores/ui/products/productSize";
import { IFullProduct } from "@/models/Product";
import {
  $favorites,
  $user,
  addFavorite,
  addFavoriteToServerFx,
  deleteFavoriteToServerFx,
  removeFavorite,
} from "@/stores/cart/init";

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
