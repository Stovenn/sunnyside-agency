import React from 'react'
import './Header.css'
// import background from '../../public/images/image-photography.jpg'

export default function Header() {
    return (
        <header className="header-block background">
            <nav className="nav">
                <div>
                    <p className="logo">sunnyside</p>
                </div>
                <div>
                    <a className="nav-link" href="http://" target="_blank" rel="noopener noreferrer">About</a>
                    <a className="nav-link" href="http://" target="_blank" rel="noopener noreferrer">Services</a>
                    <a className="nav-link" href="http://" target="_blank" rel="noopener noreferrer">Projects</a>
                    <a className="nav-link" id="contact-btn" href="http://" target="_blank" rel="noopener noreferrer">Contact</a>
                </div>
            </nav>
            <h1>We are creatives</h1>
        </header>
    )
}