import React from 'react'
import "../../StylesPages/Main.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarked, faVideo, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';


export default function Main() {
    return (
        <>
        <div className="father-main">
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
        </div>
        <div className="about">
            <div className="about-me-left">
                <h3>About</h3>
                <div className="link-icon">
                <a href><FontAwesomeIcon className="iconworld" icon={faGlobeEurope}/></a>
                <a href><img src="/instagram-square-brands.svg" width="25px"></img></a>
                <a href><FontAwesomeIcon className="iconvideo" icon={faVideo}/></a>
                </div>
            
            </div>
            
            <div className="about-me-right">
                <p><FontAwesomeIcon className="iconphone" icon={faPhone}/> +34 458774887</p>
                <p><FontAwesomeIcon className="iconloction" icon={faMapMarked}/> San Diego, California</p>
                <h3>Bio</h3>
                <p>Informacion de la persona trallectoria etc etc etc</p>
            </div>

        </div>
        
        <div className="publications">
                <div className="header-publications">
                <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>

            </div>

            <div className="activity">

            </div>

            <div className="news-feed">
                
            </div>    

            
        </>
    )
}
