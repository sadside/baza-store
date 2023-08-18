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
  addToServerFx,
  removeFavorite,
} from "@/stores/favotites/favorites";
import { useUnit } from "effector-react";
import {
  $selectedColor,
  $selectedSize,
} from "@/stores/ui/products/productSize";
import { $user } from "@/stores/auth/auth";

export const AddToFavorites = ({ product }: Props) => {
  const user = useUnit($user);

  const favorites = useUnit($favorites);

  const [isFavorite, setFavorite] = useState(false);

  useEffect(() => {
    favorites.forEach((item) => {
      if (item.id === product.id) {
        setFavorite(true);
      }
    });
  }, []);

  const handleClick = () => {
    setFavorite(!isFavorite);

    if (!isFavorite) {
      addFavorite({
        id: product.id,
        image: product.image,
        price: product.price,
        name: product.name,
      });

      if (user) addToServerFx(product.id);
    } else {
      removeFavorite({
        id: product.id,
        image: product.image,
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
