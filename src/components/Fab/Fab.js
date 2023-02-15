import React from "react";
import { Container, Button } from "react-floating-action-button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./Fab.module.css";
export default function Fab() {
  return (
    <Container className={styles.rfab__container}>
      <Link to={"AddProduct"}>
        <Button
          className="fab-item btn btn-link btn-lg text-white bg-black"
          rotate={true}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </Link>
    </Container>
  );
}
