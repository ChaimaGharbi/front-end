import AddPicture from "./AddPicture";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";

export default function AddProduct() {
  const navigate = useNavigate();
  const [isauthenticated, setIsAuthenticated] = useState(false);
  const formRef = React.useRef(null);
  const [id, setId] = useState(localStorage.getItem('commerçant_id'));
  const [imageURL, setImageURL] = useState(null);
  const [errorMessages, setErrorMessages] = React.useState('');
  const handleImageURLUpdate = (url) => {
  setImageURL(url);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const nom = formData.get('nomProduit');
    const prix = formData.get('PrixProduit');
    const description = formData.get('desc');
    const stock = formData.get('Stock');
    const imgURL = imageURL;
    try {
      const resp = await axios.post('http://localhost:3030/produit/add/' + id, {
        nom, prix, description, stock, imgURL,
        }, {Headers: {  'Authorization': 'Bearer ' + localStorage.getItem('access_token') },}).then((response) => {
          navigate("/commerçant/homepage");
        });
      } catch (error) {
        setErrorMessages('One or more information are missing'); 
        navigate("/commerçant/addproduct");
      }
  };
  return (
    <form onSubmit={handleSubmit} action={`/produit/add/${id}`} method='POST' ref={formRef}>
      <AddPicture onImageURLUpdate={handleImageURLUpdate} ></AddPicture>
      <div className="form-row">
        <div className="col-7 m-5">
          <label htmlFor="nomProduit" className="col-sm-2 col-form-label">
            Nom du Produit
          </label>
          <input type="text" className="form-control" id="nomProduit" name="nomProduit" required />
        </div>
      </div>
      <div className="form-row">
        <div className="col-7 m-5">
          <label htmlFor="PrixProduit" className="col-sm-2 col-form-label">
            Prix du Produit
          </label>
          <input
            type="number"
            step="0.001"
            className="form-control"
            id="PrixProduit"
            name="PrixProduit"
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="col-7 m-5">
          <label htmlFor="desc" className="col-sm-2 col-form-label" >
            Description
          </label>
          <textarea className="form-control" id="desc" required name="desc"/>
        </div>
      </div>
      <div className="form-row">
        <div className="col-7 m-5">
          <label htmlFor="Stock" className="col-sm-2 col-form-label">
            Stock
          </label>
          <input
            type="number"
            step="0.001"
            className="form-control"
            id="Stock"
            name='Stock'
            required
          />
        </div>
      </div>
      {errorMessages && <p style={{color: 'red', fontStyle: 'italic', textAlign: 'center'}}>{errorMessages}</p>}
      <div className="col-auto mx-5">
        <button type="submit" className="btn btn-primary mb-2 ">
          Ajouter
        </button>
      </div>
    </form>
  );
}
