import React from "react";
import { Container, Button } from "react-floating-action-button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
export default function Fab() {
  return (
    <Container className="rfab__container">
      <Link to={"AddProduct"}>
        <Button
          tooltip="ajouter Produit"
          className="fab-item btn btn-link btn-lg text-white bg-black"
          rotate={true}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </Link>
    </Container>
  );
}
