import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
        <Switch>
          <Header />
          <ProductComponent />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
