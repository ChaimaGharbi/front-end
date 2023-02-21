import styles from './style.module.css'
import AddPicture from '../AddPicture'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

export default function SignUp() {
  const [imageURL, setImageURL] = useState(null);
  const formRef = React.useRef(null);
  const [errorMessages, setErrorMessages] = React.useState('');
  let navigate = useNavigate();
  localStorage.clear();
  const handleImageURLUpdate = (url) => {
    setImageURL(url);
    };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const email = formData.get('email');  
    const mdp = formData.get('mdp');
    const name = formData.get('name');
    const firstname = formData.get('firstname');
    const nom_du_service = formData.get('nom_du_service');
    const numTel = formData.get('numTel');
    const imgURL = imageURL;
    console.log(email, mdp, name, firstname, nom_du_service,imgURL);
    try {
      axios
      .post('http://localhost:3030/commercant/register', {email, mdp, name, firstname, nom_du_service,imgURL, numTel})
      .then((response)=>navigate('/commerçant'))
    } catch (error) {
      if (error.response && error.response.status === 409) {
      setErrorMessages('Email already exists');
      navigate("/commerçant/signup");
    } else {
      setErrorMessages('One or more information are missing'); 
      navigate("/commerçant/signup");}
    }
  }
  return (
    <div >
      <h1 className={styles.h11}>s'inscrire</h1>
      <form className={styles.containerr} onSubmit={handleSubmit} action='/commercant/register' method='POST' ref={formRef}>
        <AddPicture onImageURLUpdate={handleImageURLUpdate} required></AddPicture>
        <div className="mb-3">
          <label htmlFor="disabledTextInput" className="form-label">
            Prenom
          </label>
          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            name='firstname'
            required
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="disabledTextInput" className="form-label">
            Nom
          </label>
          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            name='name'
            required
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="disabledTextInput" className="form-label">
            Nom du service
          </label>
          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            name='nom_du_service'
            required
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="disabledTextInput" className="form-label">
          Numero du telephone
          </label>
          <input
            type="tel"
            id="disabledTextInput"
            className="form-control"
            name='numTel'
            required
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name='email'
            required
          ></input>
          <div id="emailHelp" className="form-text">
          Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
          Mot de passe
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name='mdp'
            required
          ></input>
        </div>
        <br />
        {errorMessages && <p style={{color: 'red', fontStyle: 'italic', textAlign: 'center'}}>{errorMessages}</p>}
        <button type="submit" className={`btn btn-primary ${styles.b}`}>
        continuer
        </button>
      </form>
    </div>
  );
}
