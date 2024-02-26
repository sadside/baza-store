"use client";

import Products from "@/components/products/Products";
import { Video } from "@/components/video/Video";
import { IProduct } from "@/models/Product";
import { BrowserView, MobileView } from "react-device-detect";
import Photo from "@/components/ui/photo/Photo";

interface Props {
  products: IProduct[];
}

export const HomePage = ({ products }: Props) => {
  return (
    <div>
      <Video src={"./video.mp4"} />
      <Photo />
      <Products products={products} />
    </div>
  );
};
