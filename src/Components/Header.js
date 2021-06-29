import React from 'react'
import "../StylesPages/Header.css";
import {useHistory} from "react-router-dom";
import Tooltip from "react-simple-tooltip"
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
                <Tooltip content="Home">
                <img src="../logo/logo.svg" alt=""/>
                </Tooltip>
            </div>  

            <div className="search">
                <input type="search" name="search" id="serch" placeholder=" &#x1F50D; Type here to search "/>
            </div>
            
            <div className="actions">
            
            <div className="avatar" onClick={()=>goPerfil()}>
                <img src="https://randomuser.me/api/portraits/men/22.jpg" alt=""/>
            </div>

            <div className="alert" onClick={()=>goEdit()}>
                <FontAwesomeIcon className="iconbell" icon={faEdit}/>
                
            </div>
            <div className="alert" onClick={()=>singOut()}>
                <FontAwesomeIcon className="iconbell" icon={faSignOutAlt}/>
            </div>
            
            
        
            </div>

        </nav>
    )
}
