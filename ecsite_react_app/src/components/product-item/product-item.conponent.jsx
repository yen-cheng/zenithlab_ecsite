import React from 'react';

import './product-item.style.scss';

export const ProductItem = ()=>(
    <div className="product-item">
        <div className="product-item-img"></div>
        <div className="product-item-content">
            <span className="product-item-content__category">category1</span>
            <h2 className="product-item-content__title">product 1</h2>
            <p className="product-item-content__describe">just for test</p>
            <footer className="product-item-content-footer">
                <div className="product-item-content-footer__price">JPY$1000</div>
                <button className="product-item-content-footer__btn">BUY</button>
            </footer>
        </div>
    </div>
);