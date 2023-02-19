import axios from 'axios';
import OrderCard from '../Components/client/OrderPage/OrderCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React ,{useState,useEffect} from 'react' ;
import { Route, Link, useParams, useNavigate } from "react-router-dom";
export default function ClientOrders(){
    const params = useParams();
    let navigate = useNavigate();
    const [isauthenticated, setisauthenticated] = useState(false);
    const handleClick = async (e) => {
      e.preventDefault();
      localStorage.removeItem("token");
      navigate('/signup');
    }
    const getAuthorizationHeader = () => `Bearer ${localStorage.getItem("token")}`;
    const [id, setid] = useState("");
    React.useEffect(() => {
      axios
        .get('http://localhost:3030/commandes/:' + params.id, {
          headers: { Authorization: getAuthorizationHeader() },
        })
        .then((data) => {setisauthenticated(true); setid(data.data.email);
        })
        .catch((err) => {
          navigate('/signup');
        });
    });
    if (!isauthenticated) {
      return navigate('/signup');
    }else {
    return(
        <section className="block">
        <Container className="sousblock" >
        <Row className="row">
            {
                this.params.commandes.map((p)=>{
                    return(
                        <Col className="column" sm={1} md={2} lg={3}>
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
    )}
}
