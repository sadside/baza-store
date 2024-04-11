import React from "react";

export const ShowWelcome = ({ name }: { name: string }) => {
  return (
    <div className="font-semibold   w-full h-[100px] flex justify-center text-[19px] items-center  	">
      <div>
        <span>Здравствуйте, </span>
        <span>{name}</span>
      </div>
    </div>
  );
};

