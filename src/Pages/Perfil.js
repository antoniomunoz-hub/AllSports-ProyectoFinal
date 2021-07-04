import React from 'react'
import "../StylesPages/Perfil.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons' 
import { faPhone, faMapMarked, faGlobeEurope, faCamera } from '@fortawesome/free-solid-svg-icons';
import Header from "../Components/Header"
import Feed from "../Components/Home/Feed"

export default function Main() {
    return (
        <>
        <Header/>
        <div className="father-main container radius">
            <main className="data-user container">
                <div className="photo-main radius"></div>
                <div className="information">
                    <h3 className="perfilname">Antonio Muñoz</h3>
                    <p>Habilidades aasjasasjasjas</p>
                </div>  
                <div className="photoperfil">
                    <img src="https://randomuser.me/api/portraits/men/22.jpg" alt=""/>
                </div>
            </main>
        </div>
        <div className="about radius">
            <div className="about-me-left">
                <h3>About</h3>
                <div className="link-icon">
                <a href><FontAwesomeIcon className="icon" icon={faGlobeEurope}/></a>
                <a href><FontAwesomeIcon className="icon" icon={faInstagram}/></a>
                <a href><FontAwesomeIcon className="icon" icon={faYoutube}/></a>
                <a href><FontAwesomeIcon className="icon" icon={faFacebookF}/></a>
                </div>
            
            </div>
            
            <div className="about-me-right">
                <p><FontAwesomeIcon className="icon" icon={faPhone}/> +34 458774887</p>
                <p><FontAwesomeIcon className="icon" icon={faMapMarked}/> San Diego, California</p>
                <h3>Bio</h3>
                <p>Informacion de la persona trallectoria etc etc etc</p>
            </div>

        </div>
        
        <div className="new-publications radius">
                <div className="header-publications">
                    <h4>Nueva Publicacion</h4>
                </div>
                <div className="area">
                    <textarea className="text-area" name="" id="" cols="30" rows="10" placeholder="Escribe aqui..."></textarea>
                </div>
                <div className="footer-publication">
                    <button className="button-publication"><FontAwesomeIcon icon={faCamera}></FontAwesomeIcon> Examinar </button>
                    <button className="button-publication">Guardar</button>
                </div>

            </div>

            <div className="feed-perfil">
                <Feed editMode={true}/>   
            </div>

                

            
        </>
    )
}
