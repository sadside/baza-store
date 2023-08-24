"use client";
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

type Props = {
  product: IFullProduct;
};

export const ProductInfo = ({ product }: Props) => {
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
            productAddedToCart({
              id: selectedSize.mod_id,
              price: product.price,
              name: product.name,
              image: product.images[0],
              size: selectedSize.name,
              color: product.current_color.name,
            });
          }}
        />
        <SubProductInfo />
        <Hr />
        <ProductDetails descrition={product.description} />
      </div>
    </div>
  );
};
