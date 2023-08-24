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
  const selectedSize = useUnit($selectedSize);
  const selectedColor = useUnit($selectedColor);

  const defaultColor = {
    name: "Стандартный",
    hex_code: "#ccc",
  };

  useEffect(() => {
    return pageUnMounted();
  }, []);

  // if (modifications?.length) {
  //   modifications.forEach((item) => {
  //     let currentColor = {
  //       ...defaultColor,
  //     };

  //     if (item.color) {
  //       currentColor = {
  //         ...item.color,
  //       };
  //     }

  //     const sizes: any[] = [];

  //     if (!added.includes(currentColor.name)) {
  //       if (item.size) {
  //         modifications.forEach((mod) => {
  //           if ((mod?.color?.name || defaultColor.name) === currentColor.name) {
  //             sizes.push({
  //               size: mod.size,
  //               id: mod.id,
  //             });
  //           }
  //         });
  //       }

  //       added.push(currentColor.name);

  //       if (!sizes.length)
  //         sizes.push({
  //           id: item.id,
  //           size: "OS",
  //         });

  //       colours.push({
  //         ...currentColor,
  //         sizes,
  //       });
  //     }
  //   });
  // }

  useEffect(() => {}, []);

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
