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
  removeFavorite,
} from "@/stores/cart/init";

export const AddToFavorites = ({ product }: Props) => {
  const user = useUnit($user);

  const favorites = useUnit($favorites);

  const [isFavorite, setFavorite] = useState(false);

  useEffect(() => {
    favorites.forEach((item) => {
      if (item.slug === product.current_color.slug) {
        setFavorite(true);
      }
    });
  }, []);

  const handleClick = () => {
    setFavorite(!isFavorite);

    if (!isFavorite) {
      addFavorite({
        slug: product.current_color.slug,
        image: product.images[0],
        price: product.price,
        name: product.name,
      });

      // if (user) addToServerFx(product.current_color.slug);
    } else {
      removeFavorite({
        slug: product.current_color.slug,
        image: product.images[0],
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
