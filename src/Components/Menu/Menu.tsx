import * as React from 'react';
import logo from "../.././Resources/logo.png";
import { useState } from 'react';
import {
    Link, 
} from "react-router-dom";

interface Menu {
}

export const Menu: React.FC<Menu> = () => {
    return (
        <nav className="nav">
            <div className="nav__loguito">
                <img className="nav__logo" src={logo}/>
            </div>
            <ul className="nav__list">
                <li className="nav__item"><Link className="nav__link" to="/"><span className="nav__title">Home</span></Link></li>
                <li className="nav__item"><Link className="nav__link" to="about"><span className="nav__title">About us</span></Link></li>
                <li className="nav__item"><Link className="nav__link" to="approach"><span className="nav__title">Approach</span></Link></li>
                <li className="nav__item"><Link className="nav__link" to="brands"><span className="nav__title">Brands</span></Link></li>
                <li className="nav__item"><Link className="nav__link" to="contact"><span className="nav__title">Contact</span></Link></li>
            </ul>
        </nav>
    );
}