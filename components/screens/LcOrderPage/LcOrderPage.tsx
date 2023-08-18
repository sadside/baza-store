import Orders from "@/components/orders/Orders";
import Welcome from "@/components/welcome/Welcome";
import React from "react";

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
