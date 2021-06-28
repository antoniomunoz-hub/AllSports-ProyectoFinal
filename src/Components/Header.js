import React from 'react'
import "../StylesPages/Header.css";
import {useHistory} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

 


export default function Header() {
    let history = useHistory();
    const goHome=()=>{
        history.push("/home");
    }
    const goPerfil=()=>{
        history.push("/perfil");
    }

    return (
        <nav className="nav">
            <div className="logo" onClick={()=>goHome()}>
                <img src="../logo/logo.svg" alt=""/>
            </div>  

            <div className="search">
                <input type="search" name="search" id="serch" placeholder=" &#x1F50D; Type here to search "/>

            </div>
            <div className="actions">
            <div className="alert">
            <FontAwesomeIcon className="iconbell" icon={faBell}/>
            </div>
            <div className="avatar" onClick={()=>goPerfil()}>
                <img src="https://randomuser.me/api/portraits/men/22.jpg" alt=""/>
            </div>
            </div>

        </nav>
    )
}
