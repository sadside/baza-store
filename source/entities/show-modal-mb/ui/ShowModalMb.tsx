import React from 'react';
import { Modal } from '@shared/ui/modal';
import { useUnit } from 'effector-react';
import { $activeModalExit, changeVisibleExit } from '@/stores/areYouSure/exit';
import { Button } from '@shared/theme/button';
import SvgSelector from '@shared/utils/SvgSelector';
import s from './index.module.scss';
import classNames from 'classnames';

const ShowModalMb = ({ func, text }: { func: any; text: string }) => {
  const vis = useUnit($activeModalExit);
  return (
    <>
      <Modal visible={vis} setVisible={changeVisibleExit}>
        <div
          className={classNames(
            ' relative h-[156px] pt-[40px] px-[20px] pb-[20px] g-[32px] flex flex-col  items-center justify-between',
            s.modal
          )}
        >
          <div className="font-semibold uppercase text-[14px] leading-5 ">{text}</div>
          <div className="flex w-full gap-[20px] h-[44px] overflow-hidden ">
            <Button.Secondary onClick={() => changeVisibleExit(false)}>Нет</Button.Secondary>
            <Button.Primary
              onClick={() => {
                func();
                changeVisibleExit(false);
              }}
            >
              Да
            </Button.Primary>
          </div>
          <span onClick={() => changeVisibleExit(false)} className="absolute right-[7px] top-[7px] ">
            <SvgSelector id="close" />
          </span>
        </div>
      </Modal>
    </>
  );
};

export default ShowModalMb;
