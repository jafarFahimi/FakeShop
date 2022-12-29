import { useSelector } from "react-redux";

// an individual product
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  // const { id, title } = products[0];
  return (
    <div>
      <h2>ProductComponent</h2>
    </div>
  );
};
export default ProductComponent;
