import { MdAdd } from "react-icons/md";
import { Link } from 'react-router-dom';

import "./styles.scss";
const Fab = () => {
  return (
    <ul className="fab-container">
      <Link to={'/commerçant/addProduct'}>
      <li className="fab-button">
        <MdAdd></MdAdd>
      </li>
      </Link>
    </ul>
  );
};

export default Fab;
