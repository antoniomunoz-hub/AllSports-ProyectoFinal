import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../StylesPages/Login.css";


export default function Login() {
  
    const history = useHistory();

    return (
        <div className="loginpage">
            <div className="tittlepage">
                <h2 className="logo">ALLSPORTS</h2>
                <p className="text">Unete a la comunidad deportiva mas amplia del mundo, haz de tu pasion tu profesion</p>
            </div>

            <div className="entry">
                <h3>Login</h3>
                <input type="text" placeholder="Correo electronico"/>
                <input type="password"  placeholder="Contraseña"/>
                <button className="entryaccount" onClick={()=>history.push("/home")}>Entrar</button>
                <Link to="/forgot-password">¿Has olvidado la contraseña?</Link>
                <button className="create"onClick={()=>history.push("/create-account")}>Crear cuenta nueva</button>
            </div>  
        </div>
    )
}
