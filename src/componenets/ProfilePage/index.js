import "./style.css";

export default function () {
  return (
    <div className="container">
      <div className="profile">
        <div className="upload">
          <img src="coffeeShop.jpg" className="profile-icon"></img>
          <div className="round">
            <input type="file" accept="png jpg" name="logo" ></input>
            {/* onChange={(e)=>{e.target.value}*/}
            <i className="fa fa-camera"></i>
          </div>
        </div>

        <div className="profile-info">
          <p className="title">Nom et Prenom:</p>
          <p>mohamed masmoudi</p>
          <p className="title">Nom de service:</p>
          <p>Coffee</p>
          <p className="title">Numero de telephone:</p>
          <p>+1 202-918-2132</p>
          <p className="title">Email:</p>
          <p>email@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
