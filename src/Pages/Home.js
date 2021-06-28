import React from 'react'
import Header from '../Components/Header';
import Feed from '../Components/Home/Feed'
import "../StylesPages/Home.css";

export default function Home() {
    return (
        <div>
            <Header/>
            <Feed/>
        </div>
    )
}
