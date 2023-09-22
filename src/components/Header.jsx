import React from 'react';
import logo from '../assets/logo.png';


function Header() {
    return (
        <div className="header">
            <img src={logo} alt="Logo" className="logo" />
            <ul>
                <li>Tab 1</li>
                <li>Tab 2</li>
                <li>Tab 3</li>
                <li>Tab 4</li>
            </ul>
        </div>
    );
}

export default Header;
