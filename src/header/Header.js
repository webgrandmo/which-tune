import React from 'react';
import './Header.css';
import logo from './../img/logo_mobile.svg';

const Header = (props) => {
    return (
        <header className="Header">
            <div className="Brand">
                <img className="Logo" src={logo} alt={props.logo} />
                <h1>Which Tune app</h1>
            </div>
        </header>
    )
}

export default Header;