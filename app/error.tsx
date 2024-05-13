"use client";

import Link from "next/link";
import { Button } from "@shared/theme/button";

export default function ErrorWrapper({ error }: { error: Error }) {
  return (
    <div className="h-lvh w-full flex items-center justify-center">
      <div className="w-[800px] h-80 bg-[#4E4E4E] rounded p-5 flex justify-between items-center text-white">
        <div className="basis-1/2">
          <h2 className="font-bold text-2xl mb-4">Упс! Что-то пошло не так... </h2>
          <p>
            На сервере произошла неизвестная ошибка. Наша команда уже трудится над ее устранением. Попробуйте позже!
          </p>
        </div>
        <div className="flex items-center basis-1/2 flex-col">
          <div className="text-7xl font-extrabold tracking-[.5em] mb-4 ml-6">500</div>
          <div className="flex gap-3 w-full px-6">
            <Link href="/" className="w-full" passHref>
              <Button.Secondary>На главную</Button.Secondary>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
