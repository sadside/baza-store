"use client";

import SvgSelector from "@shared/utils/SvgSelector";
import styles from "./AddToFavorites.module.scss";
import { useEffect, useState } from "react";
import { useUnit } from "effector-react";
import { IFullProduct } from "@shared/types/models/Product";
import { cn } from "@/lib/utils";
import { $favorites, favoriteAdded, favoriteRemoved } from "@entities/favorite/model/favorite-model";

type Props = {
  product: IFullProduct;
};

export const AddToFavorites = ({ product }: Props) => {
  const favorites = useUnit($favorites);

  const [isFavorite, setFavorite] = useState(false);

  useEffect(() => {
    favorites?.forEach((item) => {
      if (item.slug === product.current_color.slug) {
        setFavorite(true);
      }
    });
  }, [favorites]);

  const handleClick = () => {
    setFavorite(!isFavorite);

    if (!isFavorite) {
      favoriteAdded(product.current_color.slug);
    } else {
      favoriteRemoved(product.current_color.slug);
    }
  };

  return (
    <div className={cn(styles.wrapper, "hover:animate-pulse")} onClick={handleClick}>
      <SvgSelector id={isFavorite ? "favoriteHeart" : "heart"} style={{ height: 25, width: 25 }} />
    </div>
  );
};
