import React from 'react'
import "../../StylesPages/Feed.css"

export default function Feed() {
    return (
        <>
        <div className="publication">
            <div className="parent-feed">
                <div className="image">
                    
                <img src="/images/52.jpeg"></img>
                
                </div>
                <div className="name">
                    <h4>Marcus Almeida</h4>
                    <h5>Hola que tal</h5>
                </div>   
            </div>
            
            <div className="content-publication">
            <p>Titulo publicacion</p>
            <img src="/images/mountain.jpg" alt=""/>
        </div>
     </div>
     </>
    )
}
