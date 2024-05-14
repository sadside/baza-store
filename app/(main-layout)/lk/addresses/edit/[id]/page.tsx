import React from "react";
import { AddAddress } from "@pages/add-address";

type params = {
  params: {
    id: number;
  };
};

const AddAddressed = ({ params: { id } }: params) => {
  return <AddAddress />;
};

export default AddAddressed;
