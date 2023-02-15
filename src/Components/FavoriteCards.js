import React from "react";
import './Css/Cards.css';
import FavoriteCard from '../Components/FavoriteCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default class FavoriteCards extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <section className="block">
            <Container  className="sousblock">
            <Row className="row">
                {
                    this.props.products.map((p)=>{
                        return(
                            <Col className="column" sm={1} md={2} lg={3} >
                                  <FavoriteCard product={p}  />
                             </Col>
                        )

                    })
                }
              
            </Row>
           
           
          </Container>
          </section>
        )}}