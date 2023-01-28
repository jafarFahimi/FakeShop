import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/productComponent.css";

const ProductComponent = () => {
  const { products } = useSelector((state) => state.allProducts); // allProducts come from combineReducers in index.js
  const renderList = products.map((product) => {
    const { price, id, title, image, category, description, rating } = product;
    return (
      <Link key={id} to={`/product/${id}`} className="productLink">
        <div className="productLink-container text-start w-75">
          <div className="productLink__img-container">
            <img src={image} className="productLink__img" alt={title} />
          </div>
          <b>{title}</b>
          <b className="d-block fs-4">$ {price}</b>
          <small className="text-lead">{category}</small>
        </div>
      </Link>
    );
  });

  return (
    <div className="container-lg">
      <main className="allProduct">{renderList}</main>
    </div>
  );
};
// export default connect(mapStatetoProps, mapDispatchToProps)(ProductComponent);
export default ProductComponent;
