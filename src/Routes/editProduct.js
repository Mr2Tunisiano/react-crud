import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditProduct() {
  const { id } = useParams()
  let navigate = useNavigate()
  const [prodName, setProdName] = useState("");
  const [prodPrice, setProdPrice] = useState("");
  const [prodImg, setProdImg] = useState("");
  const [prodDesc, setProdDesc] = useState("");
  const [prodCat, setProdCat] = useState("");
  useEffect(() => {
    fetch(`http://localhost:3004/Products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProdName(data.title);
        setProdDesc(data.description);
        setProdCat(data.category);
        setProdImg(data.image);
        setProdPrice(data.price);
      });
  },[id])
  function formSubmit(e) {
    e.preventDefault()
    axios
      .put(`http://localhost:3004/Products/${id}`, {
        title: prodName,
        description: prodDesc,
        category: prodCat,
        image: prodImg,
        price: prodPrice,
      })
      .then(navigate(`/product/${id}`));
  }
  return (
    <>
      <form className="row g-3" onSubmit={formSubmit}>
        <div className="col-md-6">
          <label htmlFor="Title" className="form-label">
            Title
          </label>
          <input
            type="text"
            onChange={(e) => setProdName(e.target.value)}
            value={prodName}
            className="form-control"
            id="Title"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="Price" className="form-label">
            Price
          </label>
          <input
            type="number"
            onChange={(e) => setProdPrice(e.target.value)}
            value={prodPrice}
            className="form-control"
            id="Price"
          />
        </div>
        <div className="col-12">
          <label htmlFor="Description">Description</label>
          <textarea
            onChange={(e) => setProdDesc(e.target.value)}
            value={prodDesc}
            className="form-control"
            placeholder="Description"
            id="Description"
          ></textarea>
        </div>
        <div className="col-md-6">
          <label htmlFor="Image" className="form-label">
            Image
          </label>
          <input
            type="text"
            onChange={(e) => setProdImg(e.target.value)}
            value={prodImg}
            className="form-control"
            id="Image"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="Categorie" className="form-label">
            Categorie
          </label>
          <select
            id="Categorie"
            onChange={(e) => setProdCat(e.target.value)}
            value={prodCat}
            className="form-select"
          >
            <option>Choose...</option>
            <option>{prodCat}</option>
          </select>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Enregistrer
          </button>
        </div>
      </form>
    </>
  );
}
export default EditProduct