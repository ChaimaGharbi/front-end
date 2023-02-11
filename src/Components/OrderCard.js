import React from "react";
import {FaHeart} from 'react-icons/fa';
import { BsFillBasketFill } from "react-icons/bs";
import { Card, Row, Col } from 'react-bootstrap';
import '../Css/Card.css';


export default class OrderCard extends React.Component{
    constructor(props){
        super(props);
        this.state={taken: true };
       
    }
    render(){
      
        return(
            <div>
               <Card style={{ width: '18rem' }}>
                     <Card.Header>
                        <Row>
                            <Col>
                              <Card.Img className="image" src={this.props.product.image}/>
                            </Col>
                            <Col>
                              <Card.Title>{this.props.product.Title}</Card.Title>
                            </Col>
            
                        </Row>
                      </Card.Header>
     
      
    
                       <Card.Body>
                         <Card.Text>
                           {this.props.product.Description}
                          </Card.Text>
                          <div>
                            <p style={{ float: 'left' , fontSize:'30px'}}>{this.props.product.Price}</p>
                           
                            <BsFillBasketFill style={{fill : this.state.taken ? "blue" :"grey"}} className="icon"  onClick={ ()=>{ this.setState({taken: ( !( this.state.taken) ) });
                              console.log(this.state.taken);
                            }}/>
                           
                           
                           

                           
                        </div>
                      </Card.Body>
                </Card>
    

            </div>
                 )
}
}