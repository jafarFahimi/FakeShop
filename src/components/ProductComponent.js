import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductComponent = () => {
  const { products } = useSelector((state) => state.allProducts); // allProducts come from combineReducers in index.js
  const renderList = products.map((product) => {
    const { price, id, title, image, category, description, rating } = product;
    return (
      <Link key={id} to={`/product/${id}`} className="text-decoration-none text-dark w-25 mb-4">
        <div className="text-start w-75">
          <div className="d-flex justify-content-center align-item-center h-300px mb-2">
            <img src={image} className="w-100 h-100" alt={title} />
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
      <main className="d-flex flex-wrap justify-content-center bg-light align-item-center">{renderList}</main>
    </div>
  );
};
// export default connect(mapStatetoProps, mapDispatchToProps)(ProductComponent);
export default ProductComponent;
