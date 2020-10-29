import React from 'react';

import {HeaderNavItem} from '../header-nav-item/header-nav-item.component';
import LogoContainer from '../logo-container/logo-container.component';
import './header-navbar.style.scss'


export const HeaderNavbar = ()=>(
    <div className="nav-bar">
        <div className="nav-bar__half">
            <HeaderNavItem pageName="home" title="首頁"></HeaderNavItem>
            <HeaderNavItem pageName="announce" title="公告"></HeaderNavItem>
        </div>
        <LogoContainer></LogoContainer>
        <div className="nav-bar__half">
            <HeaderNavItem pageName="ordermanage" title="訂單管理"></HeaderNavItem>
            <HeaderNavItem pageName="login" title="登入"></HeaderNavItem>
        </div>
    </div>
);