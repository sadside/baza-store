import React from 'react';
import { changeVisibleAddress } from '@/stores/areYouSure/address';
import { addressRemoveBtnClicked, deleteAddressesFx } from '@entities/address/model/address-model';
import { toast } from 'sonner';

export const AddressItemActions = ({ id }: { id: number }) => {
  const handleClick = () => {
    addressRemoveBtnClicked(id);
  };

  const handleEditClick = () => {
    toast('Редактирование адреса временно недоступно.', {
      position: 'top-right',
    });
  };

  return (
    <div className="flex items-start text-[12px] text-black-300">
      <button className="mr-2.5" onClick={handleEditClick}>
        Изменить
      </button>
      <button onClick={handleClick}>Удалить</button>
    </div>
  );
};
