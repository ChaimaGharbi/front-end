import styles from "./Profile.module.css";

export default function () {
  return (
      <div className="container">
        <div className={`${styles.d_flex} justify-content-center align-items-center ${styles.profile}`}>
          <div className={styles.upload}>
            <img src="/coffeeShop.jpg" className={styles.profile_image}></img>
            <div className={styles.round}>
              <input type="file" accept="png jpg" name="logo" className={styles.file}></input>
              {/* onChange={(e)=>{e.target.value}*/}
              <i className={`fa fa-camera`}></i>
            </div>
          </div>

          <div className={styles.profile_info}>
            <form className={styles.modifier_form}>
              <div className="mb-1">
                <label for="name" className={`form-label ${styles.title}`}>
                  Prenom:
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                ></input>
              </div>
              <div className="mb-1">
                <label for="name" className={`form-label ${styles.title}`}>
                  Nom:
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                ></input>
              </div>
              <div className="mb-1">
                <label for="servicename" className={`form-label ${styles.title}`}>
                Adresse:
                </label>
                <input
                  type="text"
                  id="servicename"
                  className="form-control"
                ></input>
              </div>
              <div className="mb-1">
                <label for="tel" className={`form-label ${styles.title}`}>
                Numero du telephone:
                </label>
                <input
                  type="tel"
                  id="tel"
                  className="form-control"
                ></input>
              </div>
              <div className="mb-1">
                <label for="tel" className={`form-label ${styles.title}`}>
                Email:
                </label>
                <input
                  type="email"
                  id="tel"
                  className="form-control"
                  placeholder="exemple@gmail.com"
                ></input>
              </div>
              <button className="btn btn-primary form-control mt-3">modifier</button>
            </form>
          </div>
        </div>
      </div>
  );
}
