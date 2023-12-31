import styles from "./ProductPage.module.scss";
import {ProductInfo} from "@/components/productInfo/ProductInfo";
import {ProductPageImages} from "@/components/productPageImages/ProductPageImages";
import {IFullProduct} from "@/models/Product";

type Props = {
    product: IFullProduct;
};

export const ProductPage = ({product}: Props) => {
    return (
        <>
            <div className={styles.wrapper}>
                <ProductPageImages product={product}/>
                <ProductInfo product={product}/>
            </div>
        </>
    );
};
