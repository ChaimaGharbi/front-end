import React from 'react'
import './SignUp.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function SignUp() {
    return (
      <div className="container">
        <h1>s'inscrire</h1>
        <form>
          <div className="mb-3">
            <label for="disabledTextInput" className="form-label">
              Nom et Prenom
            </label>
            <input
              type="text"
              id="disabledTextInput"
              className="form-control"
              placeholder="Full Name"
            ></input>
          </div>
          <div className="mb-3">
            <label for="disabledTextInput" className="form-label">
              Adresse
            </label>
            <input
              type="text"
              id="disabledTextInput"
              className="form-control"
              placeholder="Adresse"
            ></input>
          </div>
          <div className="mb-3">
            <label for="disabledTextInput" className="form-label">
            Numero de telephone
            </label>
            <input
              type="tel"
              id="disabledTextInput"
              className="form-control"
              placeholder="Numero de telephone"
            ></input>
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            ></input>
            <div id="emailHelp" className="form-text">
            Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
            Mot de passe
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            ></input>
          </div>
          <input type="file" id="myFile" name="filename"></input>
          <br />
          <button type="submit" className="btn btn-primary b">
          continuer
          </button>
        </form>
      </div>
    );
  }
