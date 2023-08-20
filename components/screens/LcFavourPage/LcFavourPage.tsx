"use client";

import React from "react";
import Welcome from "@/components/welcome/Welcome";
import FavouriteBlock from "../../favouriteBlock/FavouriteBlock";
import s from "./index.module.scss";
import { useUnit } from "effector-react";
import { $favorites } from "@/stores/favotites/favorites";

export type Favour = {
  name: string;
  id: number;
  price: number;
  image: string;
};

const LcFavourPage = () => {
  const favorites = useUnit($favorites);

  //   let favourits: Favour[] | undefined = [
  //     {
  //       name: "Традиционный тренч Kensington средней длины",
  //       color: "Сине-зелёный",
  //       price: 4200,
  //       size: 50,
  //       count: 1,
  //       id: 8800553535,
  //       img: "https://s3-alpha-sig.figma.com/img/4cfb/f9ea/0d82f9732cf18779e7db909a56694460?Expires=1692576000&Signature=aj4U-tx0cAr9ZQ~IOqDjyhEuq9cxIBYCG43aLWiwHMz2IdOQZcO0VpgWh~jt4UultI0zvzu8-Rk3wwsQyVK-3h4NaztcoB~Pbwnye9UyuoRC4W0qQaY-vMUceqL6BwFzhx~C6VgBD2~7YOnoIqIups9YsCOMQ4QK0UCLPUWUC9IF27m-OglhLYV-FS7vm5cewW23qrzL94fi3wpZmLG0KGgDtW9oaM7YXKZObooX5qbx5gwPksmRJeuRo7SXx~aHZQot-bxzNKwURh9C-70qyP1vIfA~3CAtvuBt1Vr1UqOK22lDPRFevFvAYQNAz8u42C8m499elOEE9FAsVyxWGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  //     },
  //     {
  //       name: "Традиционный тренч Kensington средней длины",
  //       color: "Сине-зелёный",
  //       price: 4200,
  //       size: 50,
  //       count: 3,
  //       id: 8800553536,
  //       img: "https://s3-alpha-sig.figma.com/img/4cfb/f9ea/0d82f9732cf18779e7db909a56694460?Expires=1692576000&Signature=aj4U-tx0cAr9ZQ~IOqDjyhEuq9cxIBYCG43aLWiwHMz2IdOQZcO0VpgWh~jt4UultI0zvzu8-Rk3wwsQyVK-3h4NaztcoB~Pbwnye9UyuoRC4W0qQaY-vMUceqL6BwFzhx~C6VgBD2~7YOnoIqIups9YsCOMQ4QK0UCLPUWUC9IF27m-OglhLYV-FS7vm5cewW23qrzL94fi3wpZmLG0KGgDtW9oaM7YXKZObooX5qbx5gwPksmRJeuRo7SXx~aHZQot-bxzNKwURh9C-70qyP1vIfA~3CAtvuBt1Vr1UqOK22lDPRFevFvAYQNAz8u42C8m499elOEE9FAsVyxWGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  //     },
  //     {
  //       name: "Традиционный тренч Kensington средней длины",
  //       color: "Сине-зелёный",
  //       price: 4200,
  //       size: 50,
  //       count: 2,
  //       id: 8800553537,
  //       img: "https://s3-alpha-sig.figma.com/img/4cfb/f9ea/0d82f9732cf18779e7db909a56694460?Expires=1692576000&Signature=aj4U-tx0cAr9ZQ~IOqDjyhEuq9cxIBYCG43aLWiwHMz2IdOQZcO0VpgWh~jt4UultI0zvzu8-Rk3wwsQyVK-3h4NaztcoB~Pbwnye9UyuoRC4W0qQaY-vMUceqL6BwFzhx~C6VgBD2~7YOnoIqIups9YsCOMQ4QK0UCLPUWUC9IF27m-OglhLYV-FS7vm5cewW23qrzL94fi3wpZmLG0KGgDtW9oaM7YXKZObooX5qbx5gwPksmRJeuRo7SXx~aHZQot-bxzNKwURh9C-70qyP1vIfA~3CAtvuBt1Vr1UqOK22lDPRFevFvAYQNAz8u42C8m499elOEE9FAsVyxWGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  //     },
  //   ];
  return (
    <>
      <Welcome>
        {favorites.length ? (
          <div className={s.content}>
            {favorites.map((o) => (
              <FavouriteBlock key={o.id} o={o} />
            ))}
          </div>
        ) : (
          <div className={s.none}>
            Чтобы добавить товар в избранное нужно нажать на сердечко на
            странице товара
          </div>
        )}
      </Welcome>
    </>
  );
};

export default LcFavourPage;
