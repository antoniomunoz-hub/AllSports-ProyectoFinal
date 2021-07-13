import React from 'react';
import jwt_decode from "jwt-decode";
import {Link, useHistory} from 'react-router-dom';
import {useForm} from '../Components/Hook/UseForm';
import { useAuthContext } from "../context/AuthContext";
import "../StylesPages/Login.css";


export default function Login() {
    const {signIn} = useAuthContext();
    const history = useHistory();
    const initialFormState = {username: "", password: ""};
    const [form, handleInputChange] = useForm(initialFormState); // Custom Hook

    async function handleSubmit(e){
        e.preventDefault();

        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
        }

        const response = await fetch("http://localhost:8000/api/login_check", options);
        const data = await response.json();

        if(response.status >= 200 && response.status < 300) {
            signIn(data?.token, jwt_decode(data?.token));
            history.push("/home")
        } else {
            alert("Login incorrecto");
        }
    }

    return (
        <div className="loginpage">
            <div className="tittlepage">
                <h2 className="logo">ALLSPORTS</h2>
                <p className="text">Unete a la comunidad deportiva mas amplia del mundo, haz de tu pasion tu profesion</p>
            </div>

            <form className="entry" onSubmit={handleSubmit} >
                <h3>Login</h3>
                <input className="entry-input" type="email" placeholder="Correo electronico" name="username" onChange={handleInputChange} value={form.username}/>
                <input className="entry-input" type="password"  placeholder="Contraseña" name="password" onChange={handleInputChange} value={form.password}/>
                <input type="submit" className="entryaccount" value="Iniciar sesión" />
                {/* <Link className="link-entry" to="/forgot-password">¿Has olvidado la contraseña?</Link>  sacarlo del form*/} 
                {/* <button className="create"onClick={()=>history.push("/create-account")}>Crear cuenta nueva</button> sacar del form */}
            </form>  
        </div>
    )
}
