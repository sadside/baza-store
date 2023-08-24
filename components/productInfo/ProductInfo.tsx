"use client";

type Props = {
  product: IFullProduct;
};

import styles from "./ProductInfo.module.scss";
import { MainInfoProduct } from "../mainInfoProduct/MainInfoProduct";
import { Hr } from "../ui/hr/Hr";
import { SelectProductColor } from "../selectProductColor/SelectProductColor";
import { SelectProductSize } from "../selectSizeProduct/SelectProductSize";
import Button from "../ui/button/Button";
import { SubProductInfo } from "../subProductInfo/SubProductInfo";
import { ProductDetails } from "../productDetails/ProductDetails";
import { productAddedToCart } from "@/stores/cart/init";
import { useUnit } from "effector-react";
import {
  $selectedColor,
  $selectedSize,
  colorSelected,
  pageUnMounted,
} from "@/stores/ui/products/productSize";
import { IFullProduct } from "@/models/Product";
import { useEffect } from "react";
import { IColor } from "../selectProductColor/SelectProductColor.interface";

export const ProductInfo = ({ product }: Props) => {
  const selectedColor = useUnit($selectedColor);
  const selectedSize = useUnit($selectedSize);

  return (
    <div className={styles.productInfo}>
      <div className={styles.wrapper}>
        <MainInfoProduct product={product} />
        <Hr />
        <SelectProductColor
          colours={product.colors}
          current_color={product.current_color}
        />
        <Hr />
        <SelectProductSize sizes={product.sizes} />
        <Button
          text="Добавить в корзину"
          style={{ width: "100%" }}
          onClick={() => {
            if (selectedSize === null) {
              alert("Выберите размер");
              return;
            }
            if (selectedColor) {
              productAddedToCart({
                id: selectedSize.mod_id,
                price: product.price,
                name: product.name,
                image: product.images[0],
                size: selectedSize.name,
                color: selectedColor?.name,
              });
            }
          }}
        />
        <SubProductInfo />
        <Hr />
        <ProductDetails descrition={product.description} />
      </div>
    </div>
  );
};
