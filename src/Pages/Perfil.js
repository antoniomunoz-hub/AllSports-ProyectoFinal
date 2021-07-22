import React,{useEffect, useState} from 'react';
import "../StylesPages/Perfil.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons' 
import { faPhone, faMapMarked, faGlobeEurope, faCamera } from '@fortawesome/free-solid-svg-icons';
import Header from "../Components/Header";
import Feed from "../Components/Home/Feed";
import {useAuthContext} from '../context/AuthContext';
import URL from '../context/Consts';



//TODO HARDCODEO DE LAS PROPIEDADESD E LA BASE DE DATOS

export default function Main() {
    const [user, setUser]= useState({});
    const [selectedFile, setSelectedFile] = useState("");
    const {getToken} = useAuthContext();
    
    const onFileChange = event => {setSelectedFile(event.target.files[0]);};
    const onFileUpload = async () => { 
        const formData = new FormData(); 
       
        formData.append( 
          "myFile", 
         selectedFile, 
         selectedFile.name 
        ); 
        const response = await fetch (URL+"post/upload",{method:"POST",body:formData ,headers: new Headers({ 
        'Authorization': 'Bearer ' +getToken(),
        "Content-Type": 'multipart/form-data',})});
    }; 

    useEffect(async ()=>{
        const response = await fetch(URL+"users/profile",{method:"GET",headers: new Headers({ 'Authorization': 'Bearer ' +getToken()})});
        const data = await response.json();    
        setUser(data);
    },[])
    
    
    return (
        <>
        <Header/>
        <div className="father-main container radius">
            <main className="data-user container">
                <div className="photo-main radius"></div>
                <div className="information">
                    <h3 className="perfilname">{user.firstName}</h3>
                    <p>{user.role}</p>
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
                <p><FontAwesomeIcon className="icon" icon={faPhone}/>{user.email}</p>
                <p><FontAwesomeIcon className="icon" icon={faMapMarked}/>{user.country}</p>
                <h3>Bio</h3>
                <p>{user.speciality}</p>
            </div>

        </div>
        
        <div className="new-publications radius">
                <div className="header-publications">
                    <h4>Nueva Publicacion</h4>
                </div>
                <div className="area">
                    <textarea className="text-area" name="" id="" cols="30" rows="10" placeholder="Escribe aqui..."></textarea>
                </div>
                <div className="footer-publication" >
                <div> 
                <input type="file" onChange={onFileChange} /> 
                <button onClick={onFileUpload}> 
                  Upload! 
                </button> 
            </div> 
                    {/* <button className="button-publication"><FontAwesomeIcon icon={faCamera}></FontAwesomeIcon> Examinar </button> */}
                    <button className="button-publication">Guardar</button>
                </div>

            </div>

            <div className="feed-perfil">
                <Feed editMode={true}/>   
            </div>

                

            
        </>
    )
}
