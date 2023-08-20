import React from "react";

import LcInfo from "../../LcInfo/LcInfo";
import Welcome from "@/components/welcome/Welcome";

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
