import { IProduct } from "@/components/productItem/productItem.interface";
import styles from "./ProductPage.module.scss";
import Image from "next/image";
import { ProductInfo } from "@/components/productInfo/ProductInfo";
import Head from "next/head";
import { ProductPageImages } from "@/components/productPageImages/ProductPageImages";

type Props = {
    product: IProduct;
};

export const ProductPage = ({ product }: Props) => {
    return (
        <>
            <Head>
                <title>BazaStore</title>
            </Head>
            <div className={styles.wrapper}>
                <ProductPageImages product={product} />
                <ProductInfo product={product} />
            </div>
        </>
    );
};
