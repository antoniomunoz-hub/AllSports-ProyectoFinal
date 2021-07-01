
import React, { useState, useMemo } from 'react';

import {useForm} from '../Components/Hook/UseForm';
import CountrySelector from "../Components/Selects/CountrySelector";
import SportsSelect from '../Components/Selects/SportsSelect';
import ListWeights from '../Components/Selects/ListWheights';
import "../StylesPages/Create&EditPerfil.css";
import RoleSelect from '../Components/Selects/RoleSelect';



export default function CreateAccount({setContacts}) {
    const initialFormState = {name: "", lastname: "", male: "", female: "", password: "", confirmpassword: "", date: ""};
    const [form, handleInputChange] = useForm(initialFormState); // Custom Hook

    const handleSubmit = e => {
        e.preventDefault();
        setContacts(contacts => [...contacts, form])
    };
    return (
        <div>
            <h2>Es Momento de unirte a la comuindad Allsports</h2><br/>
            <form onSubmit={handleSubmit}>
                <fieldset>
                <legend>Que perfil tienes?</legend>
                <div className="imputblock">
                    <h3>Role:</h3>
                    <RoleSelect/><br/>
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
                        <input onChange={handleInputChange} value={form.name} type="text" id="nameimput" name="name" placeholder="Introduce tu nombre"/>
                    </div>

                    <div className="imputblock">
                        <label htmlFor="lastimput">Apellidos:</label><br/>
                        <input onChange={handleInputChange} value={form.lastname} type="text" id="lastimput" name="lastname" placeholder="Introduce tu Apellidos"/>
                    </div><br/>
                    
                    <div className="birthdate">
                    Fecha: <input onChange={handleInputChange} value={form.date} type="date" name="date"/>
                    </div>

                    <div className="sexo">
                        <h4>Sexo:</h4>
                        <input onChange={handleInputChange} value={form.male} type="radio" name="male" value="h" required/> Hombre
                        <input onChange={handleInputChange} value={form.female} type="radio" name="female" value="m"/> Mujer
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
                        <input onChange={handleInputChange} value={form.email} required type="email" id="emailimput" name="email" placeholder="Introduce tu Correo"/>
                    </div>

                    <div className="imputblock">
                        </div>
                        <label htmlFor="paswordintput">Contraseña:</label><br/>
                        <input onChange={handleInputChange} value={form.password} required type="password" id="paswordinput" name="password" placeholder="Introduce tu Contraseña"/>
                        <label htmlFor="confirmpaswordintput"></label><br/>
                        <input onChange={handleInputChange} value={form.confirmpassword} required type="password" id="confirmpaswordinput" name="confirmpassword" placeholder="Confirma Contraseña"/>
                    </div>    
                </fieldset><br/>      
                <input className type="submit" value="Enviar"></input> 
            </form>

    
        </div>    
    )
}

