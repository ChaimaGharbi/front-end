import "./style.css";

export default function () {
  return (
    <div className="">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center profile">
          <div className="upload">
            <img src="coffeeShop.jpg" className="profile-icon"></img>
            <div className="round">
              <input type="file" accept="png jpg" name="logo"></input>
              {/* onChange={(e)=>{e.target.value}*/}
              <i className="fa fa-camera"></i>
            </div>
          </div>

          <div className="profile-info">
            <form className="modifier-form">
              <div className="mb-1">
                <label for="name" className="form-label title">
                  Nom et Prenom:
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="mohamed masmoudi"
                ></input>
              </div>
              <div className="mb-1">
                <label for="servicename" className="form-label title">
                Nom de service:
                </label>
                <input
                  type="text"
                  id="servicename"
                  className="form-control"
                  placeholder="Coffee"
                ></input>
              </div>
              <div className="mb-1">
                <label for="tel" className="form-label title">
                Numero de telephone:
                </label>
                <input
                  type="tel"
                  id="tel"
                  className="form-control"
                  placeholder="+1 202-918-2132"
                ></input>
              </div>
              <div className="mb-1">
                <label for="tel" className="form-label title">
                Address email
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
    </div>
  );
}
