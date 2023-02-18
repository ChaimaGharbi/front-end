import styles from './style.module.css'

export default function SignUp() {
  return (
    <div >
      <h1 className={styles.h11}>s'inscrire</h1>
      <form className={styles.containerr}>
        <div className="mb-3">
          <label for="disabledTextInput" className="form-label">
            Prenom
          </label>
          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            required
          ></input>
        </div>
        <div className="mb-3">
          <label for="disabledTextInput" className="form-label">
            Nom
          </label>
          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            required
          ></input>
        </div>
        <div className="mb-3">
          <label for="disabledTextInput" className="form-label">
            Nom du service
          </label>
          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            required
          ></input>
        </div>
        <div className="mb-3">
          <label for="disabledTextInput" className="form-label">
          Numero du telephone
          </label>
          <input
            type="tel"
            id="disabledTextInput"
            className="form-control"
            required
          ></input>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
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
            required
          ></input>
        </div>
        <input type="file" id="myFile" name="filename"></input>
        <br />
        <button type="submit" className={`btn btn-primary ${styles.b}`}>
        continuer
        </button>
      </form>
    </div>
  );
}
