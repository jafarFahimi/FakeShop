import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { removeSelectedProduct, selectedProduct } from "../redux/actions/ProduceActions";

const ProductDetail = () => {
  // const param = useParams();
  const product = useSelector((state) => state.product);
  const { image, title, category, description, price } = product;
  const dispatch = useDispatch();
  // const { productId } = param;
  const { productId } = useParams();
  console.log(useParams());

  const fetchProductDetail = () => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        console.log(res, " fetched data");
        dispatch(selectedProduct(res.data));
      })
      .catch((err) => alert(err));
  };
  // console.log(product); // check if state has been changed by our dispatch
  // Object { productId: "1" }
  useEffect(() => {
    productId && productId !== "" && fetchProductDetail();

    return () => {
      dispatch(removeSelectedProduct()); // remember to call on dispatch
      // on going from 1 product to other, don't display 1st product, show "Loading"
    };
  }, [productId]);

  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <h2 className="mt-5">Loading ...</h2>
      ) : (
        <div className="container d-flex justify-content-center align-items-center bg-info vh-100">
          <div className="w-75 d-flex justify-content-center align-items-center border-5 shadow">
            <img className="w-25" src={image} alt={title} />
            <div className="w-50 d-flex flex-column justify-content-center align-items-start ps-4 text-start">
              <p className="fs-4">{category}</p>
              <h5>{title}</h5>
              <p className="text-lead">{description}</p>
              <b className="d-inline-block badge bg-warning py-2 px-3 text-dark">{price} $</b>
              <a class="btn btn-success btn-md" href="#" role="button">
                Add to Cart
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductDetail;
