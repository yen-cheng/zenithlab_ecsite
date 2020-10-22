import React from 'react';

import './half-nav.style.css';

export const HalfNav = () => (
    <div className="half-nav">
        <a href="https://www.google.com.tw/" className="half-nav__item half-nav__item--first">
            <div className="icon icon-home"></div>
            <span>首頁</span>
        </a>
        <a href="https://www.google.com.tw/" className="half-nav__item half-nav__item--second">
            <div className="icon icon-onsale"></div>
            <span>優惠活動</span>
        </a>
    </div>
);