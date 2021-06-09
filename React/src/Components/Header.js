import React from 'react'
import "../StylesPages/Header.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';



export default function Header() {
    return (
        <nav className="nav">
            <div className="logo">
                LOGO
            </div>  

            <div className="search">
                <input type="search" name="search" id="serch" placeholder=" &#x1F50D; Type here to search "/>

            </div>
            <div className="actions">
            <div className="alert">
            <FontAwesomeIcon className="iconbell" icon={faBell}/>
            </div>
            <div className="avatar">
                <img src="https://randomuser.me/api/portraits/men/22.jpg" alt=""/>
            </div>
            </div>

        </nav>
    )
}
