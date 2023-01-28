import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { removeSelectedProduct, selectedProduct } from "../redux/actions/ProduceActions";
import "../styles/productDetail.css";

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
        <section className="productDetail__container">
          <div className="productItem">
            <div className="productItem__image-container">
              <img src={image} alt={title} />
            </div>
            <div className="productDetail__container-detail">
              <h5>{title}</h5>
              <p className="text-lead text-start">{description}</p>
              <b className="d-inline-block badge bg-warning py-2 my-2 px-3 text-dark">{price} $</b>
              <a class="btn btn-success btn-md" href="#" role="button">
                Add to Cart
              </a>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
export default ProductDetail;
