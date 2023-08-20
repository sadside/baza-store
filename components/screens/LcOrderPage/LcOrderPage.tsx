import React from "react";
import Orders from "../../orders/Orders";
import Welcome from "@/components/welcome/Welcome";

const LcOrderPage = () => {
  return (
    <>
      <Welcome>
        <Orders />
      </Welcome>
    </>
  );
};

export default LcOrderPage;
