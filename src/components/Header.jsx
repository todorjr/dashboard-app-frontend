import React from 'react';
import logo from '../assets/logo.png';


function Header() {
    return (
        <div className="header">
            <img src={logo} alt="Logo" className="logo" />
            <header>
                <nav> 
                    <ul>
                        <li>Accueil</li>
                        <li>Profil</li>
                        <li>Réglages</li>
                        <li>Communauté</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;
