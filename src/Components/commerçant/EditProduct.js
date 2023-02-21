import AddPicture from "./AddPicture";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";

export default function EditProduct() {
  const navigate = useNavigate();
  const [commerçant_id, setId] = useState(localStorage.getItem("commerçant_id"));
  const [produit, setProduit] = useState([]);
  const [errorMessages, setErrorMessages] = React.useState("");
  const product_id = localStorage.getItem("product_id");
  const [imgURL, setImageURL] = useState(null);
  const [nom, setNom] = useState("");
  const [prix, setPrix] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");

  const handleImageURLUpdate = (url) => {
    setImageURL(url);
  };
  const handleNomChange = (e) => {
    setNom(e.target.value);
  }
  const handlePrixChange = (e) => {
    setPrix(e.target.value);
  }
  const handleDescChange = (e) => {
    setDescription(e.target.value);
  }
  const handleStockChange = (e) => {
    setStock(e.target.value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.put(
        "http://localhost:3030/produit/edit/" + product_id,
        {
          nom,
          prix,
          imgURL,
          description,
          stock
        },
        {
          headers: { Authorization: "Bearer " + localStorage.getItem("access_token") },
        }
      );
      navigate("/commerçant/homepage");
    } catch (error) {
      setErrorMessages("There is an error!");
      navigate("/commerçant/editproduit");
    }
  };

  React.useEffect(() => {
    axios
      .get("http://localhost:3030/produit/" + product_id, {
        headers: { Authorization: "Bearer " + localStorage.getItem("access_token") },
      })
      .then((response) => {
        setProduit(response.data);
        setNom(produit.nom);
        setPrix(produit.prix);
        setDescription(produit.description);
        setStock(produit.stock);
        setImageURL(produit.imgURL);
      })
      .catch((error) => {
        console.log(error);
        navigate("/commerçant");
      });
  }, [product_id]);

  return (
    <form
      onSubmit={handleSubmit}
      action={`/produit/edit/${product_id}`}
      method="PUT"
    >
      <AddPicture onImageURLUpdate={handleImageURLUpdate}></AddPicture>
      <div className="form-row">
        <div className="col-7 m-5">
          <label htmlFor="nomProduit" className="col-sm-2 col-form-label">
            Nom du Produit
          </label>
          <input
            type="text"
            className="form-control"
            id="nomProduit"
            name="nomProduit"
            defaultValue={produit.nom}
            onChange={handleNomChange}
          />
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
            defaultValue={produit.prix}
            onChange={handlePrixChange}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="col-7 m-5">
          <label htmlFor="desc" className="col-sm-2 col-form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="desc"
            name="desc"
            defaultValue={produit.description}
            onChange={handleDescChange}
          />
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
            name="Stock"
            defaultValue={produit.stock}
            onChange={handleStockChange}
          />
        </div>
      </div>
      {/*errorMessages && <p style={{color: 'red', fontStyle: 'italic', textAlign: 'center'}}>{errorMessages}</p>*/}
      <div className="col-auto mx-5">
        <button type="submit" className="btn btn-primary mb-2 ">
          Modifier
        </button>
      </div>
    </form>
  );
}
