import React from "react";
import Welcome from "@/components/welcome/Welcome";
import LcInfo from "@/components/LcInfo/LcInfo";

const LcInfoPage = () => {
  return (
    <>
      <Welcome>
        <LcInfo />
      </Welcome>
    </>
  );
};

export default LcInfoPage;
