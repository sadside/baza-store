import React from "react";

export const ShowWelcome = ({ name }: { name: string }) => {
  return (
    <div className="font-semibold  uppercase  w-full h-[100px] mt-[17px] flex justify-center text-[16px] items-center  	">
      <div>
        <span>Здравствуйте, </span>
        <span>{name}</span>
      </div>
    </div>
  );
};

