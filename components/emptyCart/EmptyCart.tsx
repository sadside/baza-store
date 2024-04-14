import React from "react";
import styles from "./EmptyCart.module.scss";
import { Button } from "@shared/theme/button";
import Link from "next/link";

type Props = {};

export const EmptyCart = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Корзина пуста</div>
      <div>
        <Link href="/">
          <Button.Secondary style={{ width: 238 }}>
            Перейти в каталог
          </Button.Secondary>
        </Link>
      </div>
    </div>
  );
};
