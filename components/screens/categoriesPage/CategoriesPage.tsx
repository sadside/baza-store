import Products from "@/components/products/Products";
import { Video } from "@/components/video/Video";
import { IProduct } from "@/models/Product";

interface Props {
  products: IProduct[];
}

const CategoriesPage = ({ products }: Props) => {
  return (
    <div style={{ flex: "1 1 100%" }}>
      <Products products={products} />
    </div>
  );
};

export default CategoriesPage;
