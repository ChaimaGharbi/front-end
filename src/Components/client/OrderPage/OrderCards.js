

import OrderCard from './OrderCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React ,{useState,useEffect} from 'react' ;
import { Route, Link, useParams, useNavigate } from "react-router-dom";
import ClientOrders from '../../../Authentification/ClientOrders';

export default class OrderCards extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (ClientOrders);
      }}