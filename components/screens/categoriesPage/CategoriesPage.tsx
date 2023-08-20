import Products from "@/components/products/Products";
import { Video } from "@/components/video/Video";
import { IProduct } from "@/models/Product";

interface Props {
  products: IProduct[];
}

const CategoriesPage = ({ products }: Props) => {
  return (
    <>
      <Products products={products} />
    </>
  );
};

export default CategoriesPage;
