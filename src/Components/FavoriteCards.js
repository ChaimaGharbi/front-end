import React from "react";
import { FaHeart } from "react-icons/fa";
import '../Css/Cards.css';
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
                            <Col className="column" sm={3}>
                               <div className="col">
                                  <FavoriteCard product={p}  />
                              </div>
                             </Col>
                        )

                    })
                }
              
            </Row>
           
           
          </Container>
          </section>
        )}}