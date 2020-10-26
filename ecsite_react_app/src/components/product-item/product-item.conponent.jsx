import React from 'react';

import './product-item.style.scss';

export const ProductItem = ()=>(
    <div className="product-item">
        <div className="product-item-img"></div>
        <div className="product-item-content">
            <h2 className="product-item__title">product 1</h2>
            <span className="product-item__category">category 1</span>
            <p className="product-item__paragraph">just for test</p>
            <footer className="product-item__footer">
                <div className="product-item__price">$1000</div>
                <button className="product-item__price">BUY</button>
            </footer>
        </div>
    </div>
);