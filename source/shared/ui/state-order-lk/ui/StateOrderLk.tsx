import { ViewOrderStatusEnum } from '@shared/api/__generated__/generated-api.schemas';

interface StateOrderLkProps {
  status: ViewOrderStatusEnum;
}

export const StateOrderLk = ({ status }: StateOrderLkProps) => {
  switch (status) {
    case ViewOrderStatusEnum.in_delivery:
      return (
        <div className="bg-green min-w-[88px] overflow-visible  text-white uppercase px-[20px] text-[12px] font-semibold flex justify-center">
          в пути
        </div>
      );
    case ViewOrderStatusEnum.received:
      return (
        <div className="bg-black-25 min-w-[88px] text-black uppercase px-[20px] text-[12px] font-semibold flex justify-center">
          завершен
        </div>
      );
    case ViewOrderStatusEnum.created:
      return (
        <div className="bg-yellow min-w-[120px] text-black-300 uppercase px-[20px] text-[12px] font-semibold flex justify-center">
          создан
        </div>
      );
    case ViewOrderStatusEnum.delivered:
      return (
        <div className="bg-green min-w-[120px] text-black-300 uppercase px-[20px] text-[12px] font-semibold flex justify-center">
          доставлен
        </div>
      );
    case ViewOrderStatusEnum.paid:
      return (
        <div className="bg-green min-w-[120px] text-black-300 uppercase px-[20px] text-[12px] font-semibold flex justify-center">
          оплачен
        </div>
      );
    case ViewOrderStatusEnum.cancelled:
      return (
        <div className="bg-red min-w-[120px] text-white uppercase px-[20px] text-[12px] font-semibold flex justify-center">
          отменен
        </div>
      );
    case ViewOrderStatusEnum.failed_payment:
      return (
        <div className="bg-gray-500 min-w-[120px] text-white uppercase px-[20px] text-[12px] font-semibold flex justify-center text-nowrap ">
          не оплачен
        </div>
      );
    default:
      return <></>;
  }
};
