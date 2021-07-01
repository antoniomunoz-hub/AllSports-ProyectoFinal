
import React, { useState, useMemo } from 'react';

import CountrySelector from "../Components/Selects/CountrySelector";
import SportsSelect from '../Components/Selects/SportsSelect';
import ListWeights from '../Components/Selects/ListWheights';
import "../StylesPages/Create&EditPerfil.css";
import RoleSelect from '../Components/Selects/RoleSelect';

export default function CreateAccount() {
    const [typePerfil, setTypePerfil] = useState("Athlete");
    let extraForm;

    if(typePerfil === "Manager"){
        extraForm = (
                
            <h4>price</h4>
        )
    }

    const handleChangeType = e => {
        setTypePerfil(e.target.value)
    }

    // onChange={handleChangeType} checked={typePerfil}
    
    return (
        <div>
            <h2>Es Momento de unirte a la comuindad Allsports</h2><br/>
            
            <form action="">
                <fieldset>
                <legend>Que perfil tienes?</legend>
                <div className="imputblock">
                    <h3>Role:</h3>
                    <Select options={role} value={value} onChange={changeHandler}/><br/>    
                </div>
                <div className="imputblock">
                        <h3>Disciplina:</h3>
                        <SportsSelect/><br/>
                    </div>
                </fieldset>

                <br/>
                
                <fieldset>
                    <div>
                        <h3>Datos Personales</h3>
                        <div className="imputblock">
                        <label htmlFor="nameimput" >Nombre:</label><br/>
                        <input type="text" id="nameimput" name="username" placeholder="Introduce tu nombre"/>
                    </div>

                    <div className="imputblock">
                        <label htmlFor="lastimput">Apellidos:</label><br/>
                        <input type="text" id="lastimput" name="lastname" placeholder="Introduce tu Apellidos"/>
                    </div><br/>
                    
                    <div className="birthdate">
                    Fecha: <input type="date" name="fecha"/>
                    </div>

                    <div className="sexo">
                        <h4>Sexo:</h4>
                        <input type="radio" name="hm" value="h" required/> Hombre
                        <input type="radio" name="hm" value="m"/> Mujer
                    </div>

                    <div className="weight">
                        <h4>Peso:</h4>
                        <ListWeights/>
                    </div>

                    <div className="imputblock">
                        <h3>Pais:</h3>
                        <CountrySelector/><br/>
                    </div>

                    <div className="imputblock">
                        <label htmlFor="emailimput">Email:</label><br/>
                        <input required type="email" id="emailimput" name="Email" placeholder="Introduce tu Correo"/>
                    </div>

                    <div className="imputblock">
                        </div>
                        <label htmlFor="paswordintput">Contraseña:</label><br/>
                        <input required type="password" id="paswordinput" name="password" placeholder="Introduce tu Contraseña"/>
                        <label htmlFor="confirmpaswordintput"></label><br/>
                        <input required type="password" id="confirmpaswordinput" name="password" placeholder="Confirma Contraseña"/>
                    </div>    
                </fieldset><br/>      
                <input className type="submit" value="Enviar"></input> 
            </form>

    
        </div>    
    )
}

