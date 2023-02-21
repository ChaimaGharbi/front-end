import AddPicture from "./AddPicture";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";
import styles from "./ProfilePage/style.module.css";

export default function EditProduct() {
  const navigate = useNavigate();
  const [commerçant_id, setId] = useState(localStorage.getItem("commerçant_id"));
  const product_id = localStorage.getItem("product_id");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const imgURL = imageURL;
  const [nom, setNom] = useState("");
  const [prix, setPrix] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");

  const handleNomChange = (e) => {
    setNom(e.target.value);
  };
  const handlePrixChange = (e) => {
    setPrix(e.target.value);
  };
  const handleDescChange = (e) => {
    setDescription(e.target.value);
  };
  const handleStockChange = (e) => {
    setStock(e.target.value);
  };
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
          stock,
        },
        {
          headers: { Authorization: "Bearer " + localStorage.getItem("access_token") },
        }
      );
      navigate("/commerçant/homepage");
    } catch (error) {
      navigate("/commerçant/editproduit");
    }
  };
  useEffect(() => {
    if (selectedImage) {
      const url = "/images/" + selectedImage.name;
      setImageURL(url);
    }
  }, [selectedImage]);
  React.useEffect(() => {
    axios
      .get("http://localhost:3030/produit/" + product_id, {
        headers: { Authorization: "Bearer " + localStorage.getItem("access_token") },
      })
      .then((response) => {
        setNom(response.data.nom);
        setPrix(response.data.prix);
        setDescription(response.data.description);
        setStock(response.data.stock);
        setImageURL(response.data.imgURL);
      })
      .catch((error) => {
        console.log(error);
        navigate("/commerçant");
      });
  }, [product_id]);

  return (
    <div className="container">
      <div
        className={`${styles.d_flex} justify-content-center align-items-center ${styles.profile}`}
      >
        <div className={styles.upload}>
          <img src={imageURL} className={styles.profile_image}></img>
          <div className={styles.round}>
            <input
              accept="image/*"
              type="file"
              id="select-image"
              style={{ display: "none" }}
              onChange={(e) => setSelectedImage(e.target.files[0])}
            />
            <label htmlFor="select-image">
              <i className={`fa fa-camera`}></i>
            </label>
          </div>
        </div>
        <div className={styles.profile_info}>
          <form
            className={styles.modifier_form}
            onSubmit={handleSubmit}
            action={`/produit/edit/${product_id}`}
            method="PUT"
          >
            <div className="mb-1">
              <label htmlFor="nomProduit" className={`form-label ${styles.title}`}>
                Nom du Produit
              </label>
              <input
                type="text"
                className="form-control"
                id="nomProduit"
                name="nomProduit"
                defaultValue={nom}
                onChange={handleNomChange}
              />
            </div>
            <div className="mb-1">
              <label htmlFor="PrixProduit" className={`form-label ${styles.title}`}>
                Prix du Produit
              </label>
              <input
                type="number"
                step="0.001"
                className="form-control"
                id="PrixProduit"
                name="PrixProduit"
                defaultValue={prix}
                onChange={handlePrixChange}
              />
            </div>
            <div className="mb-1">
              <label htmlFor="desc" className={`form-label ${styles.title}`}>
                Description
              </label>
              <textarea
                className="form-control"
                id="desc"
                name="desc"
                defaultValue={description}
                onChange={handleDescChange}
              />
            </div>
            <div className="mb-1">
              <label htmlFor="Stock" className={`form-label ${styles.title}`}>
                Stock
              </label>
              <input
                type="number"
                step="0.001"
                className="form-control"
                id="Stock"
                name="Stock"
                defaultValue={stock}
                onChange={handleStockChange}
              />
            </div>
            <button type="submit" className="btn btn-primary form-control mt-3">
              Modifier
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
