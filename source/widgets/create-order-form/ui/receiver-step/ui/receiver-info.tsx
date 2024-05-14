import { receiverChangeClicked, ReceiverData } from "@widgets/create-order-form/model/third-step/step";

type ReceiverInfoProps = {
  receiver: ReceiverData;
};

export const ReceiverInfo = ({ receiver }: ReceiverInfoProps) => {
  return (
    <div className=" border-[1px] border-backBazaLogo px-[20px] py-[20px] flex mt-5 justify-between">
      <div className="text-[12px] flex flex-col justify-between">
        <div className="font-semibold uppercase">
          {receiver.surname} {receiver.name}
        </div>
        <div className="font-semibold uppercase">{receiver.mail}</div>
        <div className="font-semibold uppercase ">8 {receiver.phone}</div>
      </div>
      <div className="flex items-start text-[12px] text-black-300">
        <button className="mr-2.5" onClick={() => receiverChangeClicked()}>
          Изменить
        </button>
      </div>
    </div>
  );
};
