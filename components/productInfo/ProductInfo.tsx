"use client";
import styles from "./ProductInfo.module.scss";
import { MainInfoProduct } from "../mainInfoProduct/MainInfoProduct";
import { Hr } from "../ui/hr/Hr";
import { SelectProductColor } from "../selectProductColor/SelectProductColor";
import { SelectProductSize } from "../selectSizeProduct/SelectProductSize";
// import ButtonWrapper from "@/shared/ui/button/ui/button-wrapper";
import { SubProductInfo } from "../subProductInfo/SubProductInfo";
import { ProductDetails } from "../productDetails/ProductDetails";
import {
  $cart,
  $user,
  addToServerFx,
  productAddedToCart,
  synchronizationWithLocalStorage,
} from "@/stores/cart/init";
import { useUnit } from "effector-react";
import {
  $selectedColor,
  $selectedSize,
  colorSelected,
  pageUnMounted,
  sizeSelected,
} from "@/stores/ui/products/productSize";
import { IFullProduct } from "@shared/types/models/Product";
import { toast } from "react-toastify";
import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@shared/theme/button";

type Props = {
  product: IFullProduct;
};

export const ProductInfo = ({ product }: Props) => {
  const selectedSize = useUnit($selectedSize);
  const user = useUnit($user);
  const cart = useUnit($cart);

  const activeProduct =
    cart.filter((item) => item.slug === product.current_color.slug) || null;

  const loading = useUnit(addToServerFx.pending);

  useEffect(() => {
    sizeSelected(product.sizes[0]);
    return () => {
      sizeSelected(null);
    };
  }, []);

  const handleClick = () => {
    if (!selectedSize?.quantity) return;

    if (selectedSize === null) {
      toast.error("Выберите размер!");
      return;
    }

    if (!user) {
      productAddedToCart({
        id: selectedSize.mod_id,
        price: product.price,
        name: product.name,
        image: product.images[0],
        size: selectedSize.name,
        color: product.current_color.name,
        count: activeProduct[0]?.count || 0,
        slug: product.current_color.slug,
        old_price: product.old_price > 0 ? product.old_price : product.price,
        server_count: selectedSize.quantity,
      });
    }

    if (user) {
      toast.promise(addToServerFx(selectedSize.mod_id), {
        pending: "Добавление товара в корзину...",
        success: "Товар добавлен в корзину !",
        error: "При добавлении товара произошла ошибка...",
      });
    }
  };

  // @ts-ignore
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
        <Button.Primary loading={loading} onClick={handleClick}>
          {selectedSize?.quantity == 0 ? "Нет в наличии" : "Добавить в корзину"}
        </Button.Primary>
        <SubProductInfo />
        <Hr />
        <ProductDetails descrition={product.description} />
      </div>
    </div>
  );
};
