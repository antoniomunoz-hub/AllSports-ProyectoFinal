import React from 'react'
import "../StylesPages/ForgotPassword.css";

export default function ForgotPassword() {
    return (
        <div className="forgot-password">
            <h2>Has olvidado tu contraseña? No te preocupes estamos para ayudarte</h2>
            <div>
            <div className="imputblock">
                        <label htmlFor="emailimput" >Email:</label><br/>
                        <input required type="email" id="emailimput" name="Email" placeholder="Introduce tu Correo" />
                    </div>
                <button className="send-button" onClick={()=>{ 
                    alert('Revisa Tu Correo Para Reestablecer Contraseña');}}>Enviar</button>
                </div>   
        </div>
    )
}
