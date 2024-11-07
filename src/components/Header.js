import React from 'react'
import '../styles.css'


export default function Header(){
    return (<div className='header'>
        <img className='logo' src='logo.png' alt='movie'/>
        <h2 className='app-subtitle'>It's time for Popcorn!</h2>
    </div>)
}