import React from 'react';
import logo from '../assets/logo.png';


function Header() {
    return (
        <div className="header">
                    <ul>
                        <li>Accueil</li>
                        <li>Profil</li>
                        <li>Réglages</li>
                        <li>Communauté</li>
                    </ul>
            <img src={logo} alt="Logo" className="logo" />
        </div>
    );
}

export default Header;
