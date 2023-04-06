import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import AddProduct from "./Routes/addproduct";
import ProductPage from "./Routes/productPage";
import Welcome from "./Routes/welcome";
import ProductDetails from "./Routes/productdetails"
import EditProduct from "./Routes/editProduct";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-12">
          <Navbar />
        </div>
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/product/add" element={<AddProduct />} />
            <Route path="/product/edit/:id" element={<EditProduct />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
