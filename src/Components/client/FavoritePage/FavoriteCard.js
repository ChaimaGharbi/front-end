import React from "react";
import { FiHeart } from "react-icons/fi";
import { Card, Row, Col } from "react-bootstrap";
import "../Css/Card.css";

export default class FavoriteCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favorite: true };
  }
  render() {
    return (
      <div>
        <Card style={{ width: '17rem' }}>
          <Card.Header>
            <Row>
              <Col>
                <Card.Img className="image" src={this.props.product.image} />
              </Col>
              <Col>
                <Card.Title>{this.props.product.Title}</Card.Title>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <Card.Text>{this.props.product.Description}</Card.Text>
            <div>
              <p style={{ float: "left", fontSize: "30px" }}>
                {this.props.product.Price}
              </p>
              <FiHeart
                style={{ fill: this.state.favorite ? "red" : "white" }}
                className="icon"
                onClick={() => {
                  this.setState({ favorite: !this.state.favorite });

                  console.log(this.state.favorite);
                }}
              />
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
