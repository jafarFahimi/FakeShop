import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductComponent = () => {
  const { products } = useSelector((state) => state.allProducts); // allProducts come from combineReducers in index.js
  const renderList = products.map((product) => {
    const { price, id, title, image, category, description, rating } = product;
    return (
      <Link key={id} to={`/product/${id}`} className="w-25">
        <div className=" w-25 m-2">
          <p>{title}</p>
          <img src={image} className="w-25" alt={title} />
          <p>$ {price}</p>
          <h5>{category}</h5>
        </div>
      </Link>
    );
  });

  return (
    <div className="container-lg">
      <main className="d-flex row flex-wrap justify-content-center bg-info align-item-center">
        {renderList}
      </main>
    </div>
  );
};
// export default connect(mapStatetoProps, mapDispatchToProps)(ProductComponent);
export default ProductComponent;
