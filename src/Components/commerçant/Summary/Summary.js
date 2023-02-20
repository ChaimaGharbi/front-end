import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";

import styles from "./style.module.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import products from '../../../products.json';

import Chart from './Chart';


export default function Summary() {
 
  const [nbcustomer,setNbcustomer]=useState(0);
  const [nbproducts,setNbproducts]=useState(products.length);  
  const [earnings,setEarnings]=useState(0);
  const [bestdata,setBestdata]=useState({});
  const id=1;
  useEffect(()=>{
    axios.get("http://localhost:3030/commercant/"+id+"/nbcustomer/")
    .then((response)=>{ 
      //console.log(response);
      setNbcustomer(response.data.count);
    
    });
    axios.get("http://localhost:3030/commercant/"+id+"/nbproduct/")
    .then((response)=>{ 
      //console.log(response);
      setNbproducts(response.data.count);
    
    });
    axios.get("http://localhost:3030/commercant/"+id+"/earnings/")
    .then((response)=>{ 
      setEarnings(response.data.total);
    
    });
    axios.get("http://localhost:3030/commercant/"+id+"/bestproduct/")
    .then((response)=>{ 
      console.log(response);
      setBestdata(response.data);
    
    });
  },[])
   
  
  return (
    <MDBContainer className="my-5 text-center" >
      
      <div className="row" style={{marginTop:"-5%"}}>
      <div className="col-md-4 " >  
            <div className="card " style={{background: "linear-gradient(to right,#fe9365,#feb798)",color:"white"}} >
              <div className="card-body">
                <h4 className="mb-3">Customers
                </h4>
                <h2 className="mb-5">{nbcustomer}</h2>
              </div>
            </div>
          </div> 
          <div className="col-md-4 ">
            <div className="card "  style={{background: "linear-gradient(to right,#01a9ac,#01dbdf)",color:"white"}}>
              <div className="card-body">
                <h4 className="mb-3">Products
                </h4>
                <h2 className="mb-5">{nbproducts}</h2>
              </div>
            </div>
          </div><div className="col-md-4 ">
            <div className="card "  style={{background: "linear-gradient(to right,#0ac282,#0df3a3)",color:"white"}}>
              <div className="card-body">
                <h4 className="mb-3">Earnings 
                </h4>
                <h2 className="mb-5">{earnings} dt</h2>
              </div>
            </div>
          </div>
      </div>

      <h4 className="mt-4 mb-5">  
        <strong style={{color:"#fe5d70"}}>Best Selling Products</strong>
      </h4>
        <Chart data={bestdata}/>
   </MDBContainer>
  );

 
}

