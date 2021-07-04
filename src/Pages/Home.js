import React from 'react'
import Header from '../Components/Header';
import EditPublication from '../Components/Home/EditPublication';
import Feed from '../Components/Home/Feed'
import "../StylesPages/Home.css";

export default function Home() {
    return (
        <div>
            <Header/>
            <Feed editMode={false}/>
        </div>
    )
}
