// here we download & set/list product details on store // it's path="/"&first comp in App.js <Routes>
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { setProducts } from "../redux/actions/ProduceActions.js";
import ProductComponent from "./ProductComponent.js";

const ProductListing = () => {
  const [hasRes, setHasRes] = useState(false); // render data when they arrives.
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    axios
      .get(
        "https://fakestoreapi.com/products"
        // , { headers: { "Accept-Encoding": "gzip" } }
      )
      .then((response) => {
        dispatch(setProducts(response.data));
        setHasRes(true);
      })
      .catch((err) => {
        console.log(err, "Err");
      });
    // to store data in ur store we must 1.download data, 2.dispatch an action
    // console.log(response); // log to know what to store!
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return <div>{hasRes && <ProductComponent/>}</div>;
};
export default ProductListing;
