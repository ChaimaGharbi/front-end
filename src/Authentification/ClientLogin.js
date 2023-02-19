import { Route, Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
function ClientLogin(){
    const [errorMessage,SeterrorMessage]=React.useState('');
    let navigate =useNavigate();
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email=formData.get('email');
        const mdp=formData.get('mdp');
        
        axios.post("http://localhost:3030/client/register",{email,mdp})
        .then((data) => { 
        localStorage.setItem('token',data.data.id);
        navigate("/homepage");
        })
        .catch((err) => {
            navigate("/homepage");
            localstorage.removeItem('token');
            seterrorMessage("you entered a wrong email or password")
        });
       
    
    
        
    
    }

}