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
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Orders() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [orderDetails, setOrderDetails] = useState([]);
  const commerçant_id = localStorage.getItem("commerçant_id");
  const handleRegeteeCommande = (produit_id, client_id) => {
    axios
      .patch(
        `http://localhost:3030/commercant/delete/${commerçant_id}/${produit_id}/${client_id}`
      )
      .then((response) => {
        setOrderDetails((prevOrderDetails) =>
          prevOrderDetails.map((order) =>
            order.produit_id === produit_id && order.client_id === client_id
              ? { ...order, status: response.data.status, showButtons: false }
              : order
          )
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleAcceptCommande = (produit_id, client_id) => {
    axios
      .patch(
        `http://localhost:3030/commercant/accepte/${commerçant_id}/${produit_id}/${client_id}`
      )
      .then((response) => {
        setOrderDetails((prevOrderDetails) =>
          prevOrderDetails.map((order) =>
            order.produit_id === produit_id && order.client_id === client_id
              ? { ...order, status: response.data.status, showButtons: false }
              : order
          )
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:3030/commercant/" + commerçant_id + "/commandes", {
        headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` },
      })
      .then(async (response) => {
        const orderDetails = [];
        setOrders(response.data);
        for (const order of response.data) {
          const produit = await axios.get(
            `http://localhost:3030/produit/${order.produit_id}`
          );
          orderDetails.push({
            produit_id: order.produit_id,
            nom: produit.data.nom,
            description: produit.data.description,
            prix: produit.data.prix,
            imgURL: produit.data.imgURL,
            client_id: order.client_id,
            status: order.status,
            showButtons: order.status === "en cours de traitement",
          });
        }
        setOrderDetails(orderDetails);
      })
      .catch((error) => {
        console.log(error);
        navigate("/commerçant/homepage");
      });
  }, [commerçant_id, navigate]);
  console.log(orders);
  return (
    <MDBContainer className="my-5 text-center">
      <h4 className="mt-4 mb-5">
        <strong>Orders</strong>
      </h4>
      <MDBRow>
        {orderDetails.map((order) => {
          return (
            <MDBCol md="12" lg="4" className="mb-4">
              <MDBCard key={order.produit_id} className={styles.mdb_card}>
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image rounded hover-zoom"
                >
                  <MDBCardImage
                    src={order.imgURL}
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
                  <h5 className="card-title mb-3">{order.nom}</h5>
                  <p>{order.description}</p>
                  <h6 className="mb-3">{order.prix} DT</h6>
                  {order.showButtons && (
                    <>
                      <button
                        className="btn bg-success text-white mx-2"
                        id="OrderPage"
                        style={{ display: "inline-block" }}
                        onClick={() => {
                          handleAcceptCommande(order.produit_id, order.client_id);
                        }}
                      >
                        <i className="fa fa-check" aria-hidden="true"></i>
                      </button>
                      <button
                        className="btn bg-danger text-white mx-2"
                        id="OrderPage"
                        style={{ display: "inline-block" }}
                        onClick={() => {
                          handleRegeteeCommande(order.produit_id, order.client_id);
                        }}
                      >
                        <i className="fa fa-times" aria-hidden="true"></i>
                      </button>
                    </>
                  )}
                  {!order.showButtons && (
                    <p
                      style={
                        order.status === "rejetée"
                          ? { color: "red" }
                          : order.status === "acceptée"
                          ? { color: "green" }
                          : { display: "none" }
                      }
                    >
                      Status: {order.status}
                    </p>
                  )}
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          );
        })}
      </MDBRow>
    </MDBContainer>
  );
}
