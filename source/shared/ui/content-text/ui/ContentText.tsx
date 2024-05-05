import React, { ReactNode } from "react";

export const ContentText = ({ children }: { children: ReactNode }) => {
  return (
    <div className="leading-[15px] text-black-400 text-[13px] ">
      {children}
    </div>
  );
};

