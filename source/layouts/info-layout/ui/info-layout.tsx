import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import Welcome from '../welcome/Welcome';

export const InfoLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-10 max-w-[2560px] mx-auto">
      <Welcome />
      <div className="flex max-[1050px]:flex-col">
        <Sidebar />
        <div className="flex-1 max-w-[2000px] px-[20px] w-[70%] mr-[40px] max-[1050px]:w-full  max-[1050px]:m-0  ">
          {children}
        </div>
      </div>
    </div>
  );
};
