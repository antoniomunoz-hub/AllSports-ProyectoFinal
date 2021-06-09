import React from 'react'
import "../../StylesPages/Main.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapMarked} from '@fortawesome/free-solid-svg-icons';

export default function Main() {
    return (
        <>
        <main className="data-user">
            <div className="photo-main"></div>
            <div className="information">
                <h3 className="perfilname">Antonio Muñoz</h3>
                <p>Habilidades aasjasasjasjas</p>
            </div>  
            <div className="photoperfil">
                <img src="https://randomuser.me/api/portraits/men/22.jpg" alt=""/>
            </div>
        </main>
        <div className="about">
            <div className="about-me-left"><h3>About</h3></div>
            <div className="about-me-right">
            
            <p><FontAwesomeIcon className="iconphone" icon={faPhone}/> +34 458774887</p>
            <p><FontAwesomeIcon className="iconphone" icon={faMapMarked}/> San Diego, California</p>
            </div>
            </div>        
        </>
    )
}
