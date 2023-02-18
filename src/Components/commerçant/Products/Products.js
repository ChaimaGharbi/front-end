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
import React, {useEffect, useState} from "react";
import {ProduitAPI} from '../../../api/produit_api';
import products from '../../../products.json';


export default function Products() {
  /*const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchAllProducts() {
      const resp = await ProduitAPI.getAllProduits();
      setProducts(resp);
    }
    fetchAllProducts();
  }, []);*/
  const handleDelete = () => {
    window.confirm("Are you sure you want to delete this item?");
  };
  return (
    <MDBContainer className="my-5 text-center">
      <h4 className="mt-4 mb-5">
        <strong>Product List</strong>
      </h4>
      <MDBRow>
        {products.map((product) => {
          return (
            <MDBCol md="12" lg="4" className="mb-4">
              <MDBCard key={product.id} className={styles.mdb_card}>
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image rounded hover-zoom"
                >
                  <MDBCardImage
                    src={product.imageURL}
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
                  <h5 className="card-title mb-3">{product.name}</h5>
                  <p>{product.description}</p>
                  <h6 className="mb-3">{product.price} DT</h6>
                  <button
                    id="Delete-Button"
                    className="btn border-danger text-danger mx-2"
                    onClick={handleDelete}
                    style={{ display: "inline-block" }}
                  >
                    <i className="fa fa-trash" aria-hidden="true"></i>
                    delete
                  </button>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          );
        })}
      </MDBRow>
    </MDBContainer>
  );
}
