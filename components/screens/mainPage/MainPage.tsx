"use client";

import Products from "@/components/products/Products";
import {Video} from "@/components/video/Video";
import {IProduct} from "@/models/Product";
import Photo from "@/components/ui/photo/Photo";
interface Props {
    products: IProduct[];
}

const MainPage = ({products}: Props) => {
    return (
        <div>
            <Video src={"./video.mp4"}/>
            <Photo/>
            <Products products={products}/>
        </div>
    );
};

export default MainPage;
