import React from "react";
import Welcome from "../welcome/Welcome";
import Sidebar from "../sidebar/Sidebar";

export const LkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-10">
      <Welcome />
      <div className="flex  max-[1050px]:flex-col">
        <Sidebar />
        <div className="max-w-[2000px] bg-white-600 p-[20px] w-[80%] mr-[40px] max-[1050px]:w-full  max-[1050px]:m-0  ">
          {children}
        </div>
      </div>
    </div>
  );
};
