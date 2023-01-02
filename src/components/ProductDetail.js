import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProducts } from "../redux/actions/ProduceActions";

const ProductDetail = () => {
  const param = useParams();
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { productId } = param;
  
  const fetchProductDetail = () => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        dispatch(selectedProducts(res.data));
      })
      .catch((err) => alert(err));
  };
  // console.log(product); // check if state has been changed by our dispatch
  // Object { productId: "1" }
  useEffect(() => {
    {
      productId && productId != "" && fetchProductDetail();
    }
  }, [productId]);
  return (
    <div>
      <h2>ProductDetail</h2>
    </div>
  );
};
export default React.memo(ProductDetail);
