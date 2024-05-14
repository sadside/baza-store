'use client';

import { Popover, PopoverContent, PopoverTrigger } from '@shared/ui/shadcn/ui/popover';
import { Button } from '@shared/ui/shadcn/ui/button';
import { ChevronsUpDown } from 'lucide-react';
import { SelectModel } from '@/source/features/add-address-cdek/ui/select/model/select-model';
import { useGate, useUnit } from 'effector-react';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

interface SelectProps {
  model: SelectModel<any, any>;
  className?: string;
  placeholder: string;
}

export function Select({ model, placeholder, className }: SelectProps) {
  const { $selectIsVisible, visibleChanged, $selectedItem, $items, itemSelected, res, gate } = model;
  const [isVisible, selectedItem, items] = useUnit([$selectIsVisible, $selectedItem, $items]);

  useGate(gate);

  return (
    <Popover open={isVisible} onOpenChange={(value) => visibleChanged(value)}>
      <PopoverTrigger className={className} asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={isVisible}
          className={twMerge(
            'justify-between rounded-none h-[44px] border border-black-50 text-[12px]  hover:bg-white aria-expanded:border-black'
          )}
        >
          {items?.length ? (!selectedItem?.[res] ? placeholder : selectedItem?.[res]) : 'Ничего не найдено'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 mt-3 rounded-none max-h-[176px] overflow-y-auto">
        {items?.map((item) => (
          <div
            key={item?.[res]}
            onClick={() => itemSelected(item)}
            className={twMerge(
              'text-[12px] min-h-11 py-3 flex items-center text-wrap px-3 hover:bg-black-5 bg-white cursor-pointer transition-all duration-500 hover:font-semibold overflow-x-hidden',
              item?.[res] === selectedItem?.[res] && 'font-semibold bg-black-5'
            )}
          >
            {item?.[res] ?? 'Ошибка.'}
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
