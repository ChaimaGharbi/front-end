import styles from "./LoginComponent.module.css";
import React ,{useState,useEffect} from 'react' ;
import { Route, Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
//import localStorage from 'local-storage';
//import { type } from "os";
export function LoginComponent(props) {
  const [errorMessage,SeterrorMessage]=React.useState('');
  let navigate =useNavigate();
  const handleSubmit = async (e) =>{
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const email=formData.get('email');
      const mdp=formData.get('mdp');
      
      axios
      .post("http://localhost:3030/client/register",{email,mdp})
      .then((data)=>{
        localStorage.setItem('token',data.data.access_token.id);
        navigate("/homepage");
      })
     .catch((err)=>{
      navigate("/homepage");
      localstorage.removeItem('token');
       SeterrorMessage("you entered a wrong email or password")
     })
     
  
  }
  return (
    <div className={`${styles.wrapper} ${styles.fadeInDown}`}>
      <div id={styles.formContent}>
        <form >
          <input
            type="email"
            id="login"
            className={`${styles.fadeIn} ${styles.first} ${styles.forrm}`}
            name="login"
            placeholder="email"
            required
          />
          <input
            type="password"
            id="password"
            className={`${styles.fadeIn} ${styles.second} ${styles.forrm}`}
            name="login"
            placeholder="password"
            required
          />
          <input
            type="submit"
            className={`${styles.fadeIn} ${styles.third} ${styles.forrm1}`}
            value="Log In"
          />
        </form>

        <div id={styles.formFooter}>
          <p>
            Not a member?{"  "}
            <a className={styles.underlineHover} href="signup">
              Register
            </a>
          </p>
          <p>Commerçant?{"  "}
            <a className={styles.underlineHover} href="/commerçant">Login here</a> 
          </p>
        </div>
      </div>
    </div>
  );
}
//}
