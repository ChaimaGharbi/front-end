import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePage from './componenets/ProfilePage';
import NavBarCommercant from './componenets/NavBarCommercant';
import SignUp from './componenets/SignUppage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBarCommercant />
    <SignUp />
    <ProfilePage />
  </React.StrictMode>
);


