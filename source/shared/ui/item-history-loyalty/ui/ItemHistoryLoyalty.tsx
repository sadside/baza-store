import React from "react";
import { LoyaltyHistory } from "@shared/api/__generated__/generated-api.schemas";

interface ItemHistoryProps {
  historyItem: LoyaltyHistory;
}

export const ItemHistory = ({ historyItem }: ItemHistoryProps) => {
  return (
    <div className="border-b-black-50 border-b-2 py-[10px] font-medium text-[12px] grid grid-cols-4">
      <div className="text-center">{historyItem.datetime}</div>
      <div className="text-center">{historyItem.operation}</div>
      <div className="text-center">{historyItem.value}</div>
      <div className="text-center">{historyItem.total}</div>
    </div>
  );
};
