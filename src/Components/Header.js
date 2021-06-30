import React from 'react'
import "../StylesPages/Header.css";
import {useHistory} from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

 


export default function Header() {
    let history = useHistory();
    const goHome=()=>{
        history.push("/home");
    }
    const goPerfil=()=>{
        history.push("/perfil");
    }
    const goEdit=()=>{
        history.push("/editperfil");
    }
    const singOut=()=>{
        history.push("/");
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
            
            <div className="avatar" onClick={()=>goPerfil()}>
                <img src="https://randomuser.me/api/portraits/men/22.jpg" alt=""/>
            </div>

            <div className="alert" onClick={()=>goEdit()}>
                <FontAwesomeIcon className="iconbell" icon={faEdit} data-tip data-for="iconperfil"/>
                
            </div>
            
            <div className="alert" onClick={()=>singOut()}>
                <FontAwesomeIcon className="iconbell" icon={faSignOutAlt} data-tip data-for="iconout"/>
            </div>
            
            <ReactTooltip id="iconout">Pulsa Para Salir</ReactTooltip>
            <ReactTooltip id="iconperfil">Editar Perfil</ReactTooltip>
            
            
            
            </div>

        </nav>
    )
}
