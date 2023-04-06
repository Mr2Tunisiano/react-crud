import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function AddProduct() {
  const [prodName, setProdName] = useState("");
  const [prodPrice, setProdPrice] = useState("");
  const [prodImg, setProdImg] = useState("");
  const [prodDesc, setProdDesc] = useState("");
  const [prodCat, setProdCat] = useState("");
  const navigate = useNavigate(); //this is like header function that takes you to another page but with react routing
  function formSubmit(e) {
    e.preventDefault()
    //This is a post request sent to server with axios (need to learn more about it !!!)
    axios.post("http://localhost:3004/Products", {
      title: prodName,
      price: prodPrice,
      description: prodDesc,
      category: prodCat,
      image: prodImg
    }).then(() => navigate('/product')) //inside the navigate variable you put in the link you want to navigate to as a param
  }
  return (
    <>
      <h1>Add product Page</h1>
      <br></br>
      <br></br>
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
            <option>...</option>
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
export default AddProduct