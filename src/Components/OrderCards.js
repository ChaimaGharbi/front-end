import React from "react";
import '../Css/Cards.css';
import OrderCard from './OrderCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default class OrderCards extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <section className="block">
            <Container className="sousblock" >
            <Row className="row">
                {
                    this.props.products.map((p)=>{
                        return(
                            <Col className="column" sm={3}>
                               <div className="col">
                                  <OrderCard product={p} />
                              </div>
                             </Col>
                        )

                    })
                }
              
            </Row>
           
           
          </Container>
          </section>
        )}}