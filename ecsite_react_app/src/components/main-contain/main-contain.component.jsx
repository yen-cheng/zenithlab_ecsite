import React from 'react';

import {SideNavbar} from '../side-navbar/side-navbar.component';
import {ProductList} from '../product-list/product-list.component';

import './main-contain.style.css'

export const MainContain = ()=>(
    <div className="main-contain">
        <SideNavbar></SideNavbar>
        <ProductList></ProductList>
    </div>
)