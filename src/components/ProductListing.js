import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import {} from "../redux/actions/ProduceActions.js";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
      console.log(err, err.message);
    });
    // dispatch(setProducts(response.data));
    dispatch(setProducts([1,23,3]));
    console.log(response.data);
  };
  console.log("products; 💕💕💕💕🏆🏆🏆🏆", products);
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product Listing File</h2>
    </div>
  );
};
export default ProductListing;
