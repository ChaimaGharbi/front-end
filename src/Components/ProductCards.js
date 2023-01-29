import React from "react";
import { FaHeart } from "react-icons/fa";
import '../Css/Cards.css';
import ProductCard from './ProductCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default class ProductCards extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <section className="block">
            <Container rowSpacing={1} >
            <Row className="row">
                {
                    this.props.products.map((p)=>{
                        return(
                            <Col className="column" sm={3}>
                               <div className="col">
                                  <ProductCard product={p} />
                              </div>
                             </Col>
                        )

                    })
                }
              
            </Row>
           
           
          </Container>
          </section>
        )}}