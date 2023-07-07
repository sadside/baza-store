type Props = {
    product: IProduct;
};

import { useRouter } from "next/router";
import styles from "./ProductInfo.module.scss";
import { Breadcrumbs } from "../ui/breadcrumbs/Breadcrumbs";
import { MainInfoProduct } from "../mainInfoProduct/MainInfoProduct";
import { IProduct } from "../productItem/productItem.interface";
import { Hr } from "../ui/hr/Hr";
import { SelectProductColor } from "../selectProductColor/SelectProductColor";
import { SelectProductSize } from "../selectSizeProduct/SelectProductSize";
import Button from "../ui/button/Button";
import { SubProductInfo } from "../subProductInfo/SubProductInfo";
import { ProductDetails } from "../productDetails/ProductDetails";

export const ProductInfo = ({ product }: Props) => {
    const router = useRouter();

    return (
        <div className={styles.productInfo}>
            <div className={styles.wrapper}>
                <Breadcrumbs path={router.asPath} />
                <MainInfoProduct product={product} />
                <Hr />
                <SelectProductColor />
                <Hr />
                <SelectProductSize />
                <Button text="Добавить в корзину" style={{ width: "100%" }} />
                <SubProductInfo />
                <Hr />
                <ProductDetails />
            </div>
        </div>
    );
};
