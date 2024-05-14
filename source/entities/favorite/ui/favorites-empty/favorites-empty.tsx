import Link from "next/link";
import { Button } from "@shared/theme/button";
import React from "react";

export const FavoritesEmpty = () => {
  return (
    <div>
      <div className="font-medium text-[12px] mt-2.5 mb-7">
        Здесь будут модели, которые вы отложите в избранное.
        <br />
        Для добавления перейдите в каталог.
      </div>
      <Link href={"/"}>
        <Button.Primary width={238}>Перейти в каталог</Button.Primary>
      </Link>
    </div>
  );
};
