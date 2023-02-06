import { AiFillShopping } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";
import "./style.css";
import React from "react";

export default class NavBarCommercant extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div className="navbaritems">
        <h1 className="logo">logo</h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="#" className="link">
              <AiFillShopping className="icon" />
            </a>
          </li>
          <li>
            <a href="#" className="link">
              <CgProfile className="icon" /> Profile
            </a>
          </li>
          <li>
            <a href="#" className="link">
              <AiFillHome className="icon" /> Home
            </a>
          </li>
          <li>
            <button className="btn btn-primary">Sign out</button>
          </li>
        </ul>
      </div>
    );
  }
}
