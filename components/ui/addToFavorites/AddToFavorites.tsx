"use client";

import SvgSelector from "@/utils/SvgSelector";

type Props = {
  product: IProduct;
};

import styles from "./AddToFavorites.module.scss";
import { useEffect, useState } from "react";
import { IProduct } from "@/components/productItem/productItem.interface";
import {
  $favorites,
  addFavorite,
  removeFavorite,
} from "@/stores/favotites/favorites";
import { useUnit } from "effector-react";
import {
  $selectedColor,
  $selectedSize,
} from "@/stores/ui/products/productSize";

export const AddToFavorites = ({ product }: Props) => {
  const selectedSize = useUnit($selectedSize);
  const selectedColor = useUnit($selectedColor);

  const favorites = useUnit($favorites);

  let isFavorite = false;

  favorites.forEach((item) => {
    if (
      item.id === product.id &&
      item.color === selectedColor?.name &&
      item.size === selectedSize
    ) {
      isFavorite = true;
    }
  });

  const handleClick = () => {
    if (!isFavorite) {
      if (selectedColor && selectedSize) {
        addFavorite({
          id: product.id,
          image: product.image,
          size: selectedSize,
          color: selectedColor?.name,
          price: product.price,
          name: product.name,
        });
      } else {
        alert("Выберите цвет и размер товара");
      }
    } else {
      if (selectedColor && selectedSize)
        removeFavorite({
          id: product.id,
          image: product.image,
          size: selectedSize,
          color: selectedColor?.name,
          price: product.price,
          name: product.name,
        });
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
function addFavotite(product: IProduct) {
  throw new Error("Function not implemented.");
}
