import React from "react";
import s from "./MiniOrder.module.scss";
import { IServerCart } from "@/models/Cart";
import Image from "next/image";

type Props = {
  o: IServerCart;
};
const MiniOrder = ({ o }: Props) => {
  const { product, quantity } = o;
  return (
    <div className={s.root}>
      <div className={s.left}>
        <Image
          className={s.img}
          width={53}
          height={70}
          src={product.image}
          alt={"product image"}
        />
        <div className={s.card}>
          <span className={s.title}>{product.name}</span>
          <span className={s.article}>Артикул: {product.id}</span>
        </div>
      </div>
      <span className={s.count}>{quantity} шт.</span>
      <span className={s.price}>{(product.price / 100) * quantity} ₽</span>
    </div>
  );
};

export default MiniOrder;
