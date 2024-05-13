import React from "react";

export const TitleText = ({ text }: { text: string }) => {
  return (
    <div className="uppercase text-[16px] font-semibold">
      {text}
    </div>
  );
};

