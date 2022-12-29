import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import ProductDetail from "./components/ProductDetail.js";
import ProductListing from "./components/ProductListing.js";
import ProductComponent from "./components/ProductComponent.js";
function App() {
  return (
    // npm audit fix , npm i react-router-dom
    <div className="App">
      <BrowserRouter>
        <Header /> 
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route path="/product/:productId" exact element={<ProductDetail />} />
          <Route>404 Not Found!</Route>
        </Routes>
        <ProductComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
