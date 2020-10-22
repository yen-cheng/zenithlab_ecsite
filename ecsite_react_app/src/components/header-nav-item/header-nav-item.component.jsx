import React from 'react';
import {Link} from 'react-router-dom';

import './header-nav-item.style.css';

export const HeaderNavItem = ({pageName,title}) => {

    var className = `icon icon-${pageName}`;
    return(
        <Link to={`/${pageName}`} className="header-nav-item">
            <div className={className}></div>
            <div className="header-nav-item__title">{title}</div>
        </Link>)
};