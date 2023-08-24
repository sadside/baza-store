"use client";

import Products from "@/components/products/Products";
import { Video } from "@/components/video/Video";
import { IProduct } from "@/models/Product";
import styles from "./MainPage.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL_CLIENT } from "@/http";

interface Props {
  products: IProduct[];
}

const MainPage = ({ products }: Props) => {
  return (
    <div>
      <Video src={"./video.mp4"} />
      <Products products={products} />
    </div>
  );
};

export default MainPage;
