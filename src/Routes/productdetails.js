import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  let { id } = useParams();
  let [Product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3004/Products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);
  return (
    <div className="row">
      <div className="col-4"></div>
      <div className="col-4">
        <div className="card" style={{ width: "18rem", alignSelf: "center" }}>
          <img src={Product.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{Product.title}</h5>
            <p className="card-text">{Product.description}</p>
            <p className="card-text">
              <b>{Product.price} $</b>
            </p>
          </div>
        </div>
      </div>
      <div className="col-4"></div>
    </div>
  );
}
export default ProductDetails;
