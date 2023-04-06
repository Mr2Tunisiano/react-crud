import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function ProductPage() {
  let getAllProducts = () => {
    fetch("http://localhost:3004/Products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  };
  let [product, setProduct] = useState([]);
  useEffect(() => {
    getAllProducts();
  }, []);
  function deleteProduct(deleteid) {
    Swal.fire({
      title: `Product "${deleteid.title} Will be deleted !"`,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(`http://localhost:3004/Products/${deleteid.id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then(() => getAllProducts());
      }
    });
  }
  return (
    <>
      <div className="d-grid gap-2">
        <Link to="/product/add" className="btn btn-success mt-5">
          Add New Product
        </Link>
      </div>
      <table className="table table-striped mt-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Title</th>
            <th scope="col">Price</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>
          {product.map((data) => {
            return (
              <tr key={data.id}>
                <th scope="row">{data.id}</th>
                <td>{data.title}</td>
                <td>{data.price}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteProduct(data)}
                  >
                    Delete
                  </button>
                  <Link
                    to={`/product/edit/${data.id}`}
                    className="btn btn-primary btn-sm"
                  >
                    Edit
                  </Link>
                  <Link
                    to={`/product/${data.id}`}
                    className="btn btn-info btn-sm"
                  >
                    View
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default ProductPage;
