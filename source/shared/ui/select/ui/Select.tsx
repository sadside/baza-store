"use client";
import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@shared/ui/shadcn/ui/popover";
import { Button } from "@shared/ui/shadcn/ui/button";
import { twMerge } from "tailwind-merge";
import { ChevronsUpDown } from "lucide-react";

type Props = {
  options: {
    value: string;
    name: string;
  }[];
  value: string;
  onChange: any;
  color?: boolean
};
export const Select = ({color, options, onChange, value }: Props) => {
  const [visible, setVisible] = useState(false);
  return (
    <Popover open={visible} onOpenChange={(value) => setVisible(value)}>
      <PopoverTrigger className={"w-full  "} asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={visible}
          className={twMerge(
            "justify-between  rounded-none h-[44px] uppercase border border-black-50 text-[12px]  aria-expanded:border-black",
            color?' bg-black-5 hover:bg-black-25':'hover:bg-white'
          )}
        >
          {options?.length ? (!value ? "qdwA" : value) : "Ничего не найдено"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 mt-3 rounded-none max-h-[176px] overflow-y-auto">
        {options?.map((item) => (
          <div
            key={item.value}
            onClick={() => {
              setVisible(false);
              onChange(item.value);
            }}
            className={twMerge(
              "text-[12px] uppercase min-h-11 py-3 flex items-center text-wrap px-3 hover:bg-black-5 bg-white cursor-pointer transition-all duration-500 hover:font-semibold overflow-x-hidden",
              item.name === value && "font-semibold bg-black-5"
            )}
          >
            {item.name}
          </div>
        ))}
      </PopoverContent>

    </Popover>
  );
};
