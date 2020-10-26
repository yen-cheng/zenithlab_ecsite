import React from 'react';

import {HeaderNavItem} from '../header-nav-item/header-nav-item.component';
import './header-navbar.style.scss'
import logo from '../../assets/icon/rat.svg'


export const HeaderNavbar = ()=>(
    <div className="nav-bar">
        <div className="nav-bar__half">
            <HeaderNavItem pageName="home" title="首頁"></HeaderNavItem>
            <HeaderNavItem pageName="announce" title="公告"></HeaderNavItem>
        </div>
        <div className="logo-container">
            <img src={logo} className="logo" alt="logo"/>
        </div>
        <div className="nav-bar__half">
            <HeaderNavItem pageName="ordermanage" title="訂單管理"></HeaderNavItem>
            <HeaderNavItem pageName="login" title="登入"></HeaderNavItem>
        </div>
    </div>
);