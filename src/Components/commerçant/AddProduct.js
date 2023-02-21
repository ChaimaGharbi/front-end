import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";
import styles from "./ProfilePage/style.module.css";

export default function AddProduct() {
  const navigate = useNavigate();
  //const [isauthenticated, setIsAuthenticated] = useState(false);
  const formRef = React.useRef(null);
  const id = useState(localStorage.getItem("commerçant_id"));
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [errorMessages, setErrorMessages] = React.useState("");
  useEffect(() => {
    if (selectedImage) {
      const url = "/images/" + selectedImage.name;
      setImageURL(url);
    }
  }, [selectedImage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const nom = formData.get("nomProduit");
    const prix = formData.get("PrixProduit");
    const description = formData.get("desc");
    const stock = formData.get("Stock");
    const imgURL = imageURL;
    try {
      const resp = await axios
        .post(
          "http://localhost:3030/produit/add/" + id,
          {
            nom,
            prix,
            description,
            stock,
            imgURL,
          },
          { Headers: { Authorization: "Bearer " + localStorage.getItem("access_token") } }
        )
        .then((response) => {
          navigate("/commerçant/homepage");
        });
    } catch (error) {
      setErrorMessages("One or more information are missing");
      navigate("/commerçant/addproduct");
    }
  };
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
            action={`/produit/add/${id}`}
            method="POST"
            ref={formRef}
          >
            <div className="form-row">
              <div className="mb-1">
                <label htmlFor="nomProduit" className={`form-label ${styles.title}`}>
                  Nom du Produit
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nomProduit"
                  name="nomProduit"
                  required
                />
              </div>
            </div>
            <div className="form-row">
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
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="mb-1">
                <label htmlFor="desc" className={`form-label ${styles.title}`}>
                  Description
                </label>
                <textarea className="form-control" id="desc" required name="desc" />
              </div>
            </div>
            <div className="form-row">
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
                  required
                />
              </div>
            </div>
            {errorMessages && (
              <p style={{ color: "red", fontStyle: "italic", textAlign: "center" }}>
                {errorMessages}
              </p>
            )}
            <div className="col-auto mx-5">
              <button type="submit" className="btn btn-primary form-control mt-3">
                Ajouter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
