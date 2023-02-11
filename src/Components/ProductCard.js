import React from "react";
import {FiHeart} from 'react-icons/fi';
import { BsFillBasketFill } from "react-icons/bs";
import { Card, Row, Col } from 'react-bootstrap';
import '../Css/Card.css';


export default class ProductCard extends React.Component{
    constructor(props){
        super(props);
        this.state={ favorite: false ,
          taken: false 
         };
       
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
                           
                            <BsFillBasketFill style={{fill : this.state.taken ? "blue" :"grey"}} className="icon" onClick={ ()=>{ 
                              this.setState({taken: ( !( this.state.taken) ) });
                              console.log(this.state.taken);
                            }}
                            />
                            
                           <FiHeart style={{fill : this.state.favorite ? "red" :"white"}}  className="icon"  onClick={ ()=>{ 
                              this.setState({favorite: ( !( this.state.favorite) ) });
                              console.log(this.state.favorite);
                            }}
                           />
                           
                           

                           
                        </div>
                      </Card.Body>
                </Card>
    

            </div>
                 )
}
}