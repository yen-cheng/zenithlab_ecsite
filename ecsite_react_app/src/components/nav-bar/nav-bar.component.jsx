import React from 'react';

import {HalfNav} from '../half-nav/half-nav.component';
import './nav-bar.style.css'
import logo from '../../assets/icon/rat.svg'

export const NavBar = ()=>(
    <div className="nav-bar">
        <HalfNav></HalfNav>
        <div className="logo-container">
            <img src={logo} className="logo" alt="logo"/>
        </div>
        <HalfNav></HalfNav>
    </div>
);