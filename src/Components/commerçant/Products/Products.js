import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";
import styles from "./style.module.css";
import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";

export default function Products() {
  let navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isauthenticated, setIsAuthenticated] = useState(false);
  const [commerçant_id, setId] = useState(localStorage.getItem("commerçant_id"));
  const getAuthorizationHeader = () => `Bearer ${localStorage.getItem("access_token")}`;
  const handleEdit = (product_id) => {
    localStorage.setItem('product_id', product_id);
    navigate('/commerçant/editproduit');
  }
  const handleDelete = (product_id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      axios
        .delete("http://localhost:3030/produit/" + product_id, {
          headers: { Authorization: getAuthorizationHeader() },
        })
        .then((response) => {
          navigate("/commerçant/homepage");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  React.useEffect(() => {
    axios
      .get("http://localhost:3030/produit/commercant/" + commerçant_id, {
        headers: { Authorization: getAuthorizationHeader() },
      })
      .then((response) => {
        setIsAuthenticated(true);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
        navigate("/commerçant");
      });
  }, [commerçant_id, navigate, products]);
  if (!isauthenticated) {
    navigate("/commerçant");
  } else {
    return (
      <MDBContainer className="my-5 text-center">
        <h4 className="mt-4 mb-5">
          <strong>Product List</strong>
        </h4>
        <MDBRow>
          {products.map((product) => {
            return (
              <MDBCol md="12" lg="4" className="mb-4">
                <MDBCard key={product.produit_id} className={styles.mdb_card}>
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom"
                  >
                    <MDBCardImage
                      src={product.imgURL}
                      fluid
                      className="w-100"
                      style={{ height: "250px", width: "450px" }}
                    />
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </div>
                  </MDBRipple>
                  <MDBCardBody>
                    <h5 className="card-title mb-3">{product.nom}</h5>
                    <p>{product.description}</p>
                    <h6 className="mb-3">{product.prix} DT</h6>
                    <button
                      id="Delete-Button"
                      className="btn border-danger text-danger mx-2"
                      onClick={() => handleDelete(product.produit_id)}
                      style={{ display: "inline-block" }}
                    >
                      <i className="fa fa-trash" aria-hidden="true"></i>
                      delete
                    </button>
                    <button 
                      id="Edit-Button"
                      className='btn mx-2'
                      onClick={() => handleEdit(product.produit_id)}
                      style={{display: "inline-block"}}
                    ><i className="fa fa-edit" aria-hidden="true">  edit</i></button>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            );
          })}
        </MDBRow>
      </MDBContainer>
    );
  }
}
