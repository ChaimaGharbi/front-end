

import FavoriteCard from './FavoriteCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import React ,{useState,useEffect} from 'react' ;
import { Route, Link, useParams, useNavigate } from "react-router-dom";
import ClientFavoris from '../../../Authentification/ClientFavoris';


export default class FavoriteCards extends React.Component{
   
    render(){
       return( ClientFavoris());
     }}