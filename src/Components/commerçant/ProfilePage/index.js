import { useNavigate } from 'react-router-dom';
import styles from "./style.module.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function () {
  const navigate = useNavigate();
  const [commerçant_id, setId] = useState(localStorage.getItem("commerçant_id"));
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const imgURL = imageURL;
  const [name, setName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [ nom_du_service, setNomService ]= useState("");
  const [numTel, setNumTel] = useState(null);
  const [email, setEmail] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  }
  const handleNomServiceChange = (e) => {
    setNomService(e.target.value);
  }
  const handleNumTelChange = (e) => {
    setNumTel(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios
      .put('http://localhost:3030/commercant/edit/'+commerçant_id, {
        name, firstname, numTel, nom_du_service, email, imgURL
      })
      navigate('/commerçant/homepage');
    } catch(error) {
      navigate("/commerçant/profile");
    }
  }
  useEffect(() => {
    if (selectedImage) {
      const url ="/images/" + selectedImage.name;
      setImageURL(url);
    }
  }, [selectedImage]);
  useEffect(()=>{
    axios
    .get('http://localhost:3030/commercant/'+commerçant_id, {
      headers: {Authorization: `Bearer ${localStorage.getItem("access_token")}`}
    })
    .then((response) => {
      setFirstName(response.data.firstname);
      setName(response.data.name);
      setImageURL(response.data.imgURL);
      setNomService(response.data.nom_du_service);
      setNumTel(response.data.numTel);
      setEmail(response.data.email);
    })
    .catch((error) => {
      navigate('/commerçant');
    })
  }, []);
  return (
    <div className="container">
      <div
        className={`${styles.d_flex} justify-content-center align-items-center ${styles.profile}`}
      >
        <div className={styles.upload}>
          <img src={imageURL}  className={styles.profile_image} ></img>
          <div className={styles.round}>
            <input
              accept="image/*"
              type="file"
              id="select-image"
              style={{ display: "none" }}
              onChange={(e) => setSelectedImage(e.target.files[0])}
            />
            <label htmlFor="select-image">
            <i className={`fa fa-camera`}></i>
            </label>
          </div>
        </div>
        <div className={styles.profile_info}>
          <form className={styles.modifier_form} onSubmit={handleSubmit} action={`/commercant/edit/+${commerçant_id}`} method='PUT'>
            <div className="mb-1">
              <label htmlFor="name" className={`form-label ${styles.title}`}>
                Prenom:
              </label>
              <input type="text" id="name" className="form-control" defaultValue={firstname} onChange={handleFirstNameChange}></input>
            </div>
            <div className="mb-1">
              <label htmlFor="name" className={`form-label ${styles.title}`}>
                Nom:
              </label>
              <input type="text" id="name" className="form-control" defaultValue={name} onChange={handleNameChange}></input>
            </div>
            <div className="mb-1">
              <label htmlFor="servicename" className={`form-label ${styles.title}`}>
                Nom du service:
              </label>
              <input type="text" id="servicename" className="form-control" defaultValue={nom_du_service} onChange={handleNomServiceChange}></input>
            </div>
            <div className="mb-1">
              <label htmlFor="tel" className={`form-label ${styles.title}`}>
                Numero du telephone:
              </label>
              <input type="tel" id="tel" className="form-control" defaultValue={numTel} onChange={handleNumTelChange}></input>
            </div>
            <div className="mb-1">
              <label htmlFor="tel" className={`form-label ${styles.title}`}>
                Email:
              </label>
              <input
                type="email"
                id="tel"
                className="form-control"
                placeholder="exemple@gmail.com"
                defaultValue={email}
                onChange={handleEmailChange}
              ></input>
            </div>
            <button className="btn btn-primary form-control mt-3">modifier</button>
          </form>
        </div>
      </div>
    </div>
  );
}
