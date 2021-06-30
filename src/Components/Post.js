import React from 'react'
import "../StylesPages/Post.css"

export default function Post() {
    return (
        <>
        {/* {posts.map(post => <Post post={post}/>)} */}
                <div className="publication radius">
            <div className="parent-feed">
                <div className="image">
                    
                <img className="radius" src="/images/52.jpeg"></img>
                
                </div>
                <div className="name">
                    <h4>Marcus Almeida</h4>
                    <h5>Hola que tal</h5>
                </div>   
            </div>
            
            <div className="content-publication">
            <p>Titulo publicacion</p>
            <img className="radius" src="/images/mountain.jpg" alt=""/>
        </div>
     </div>
     </>
    )
}
