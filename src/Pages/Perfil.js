import React from 'react'
import "../StylesPages/Main.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons' 
import { faPhone, faMapMarked, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
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
                <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>

            </div>

            <div className="activity">

            </div>

            <Feed/>    

            
        </>
    )
}
