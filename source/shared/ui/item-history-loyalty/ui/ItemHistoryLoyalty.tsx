import React from "react";

type Props = {
  obj: {
    time: string
    operation: string
    history: number
    result: number
    id: number
  }

}

export const ItemHistory = ({ obj }: Props) => {
  return (
    <div className="border-b-black-50 border-b-2 py-[10px] font-medium text-[12px] grid grid-cols-4">
      <div className="text-center">{obj.time}</div>
      <div className="text-center">{obj.operation}</div>
      <div className="text-center">{obj.history}</div>
      <div className="text-center">{obj.result}</div>
    </div>
  );
};
