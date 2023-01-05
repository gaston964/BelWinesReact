import React from 'react'

const Cart = () => {
    return (
        <>
        <div className="container">
                <div className="cart-img">
                    <img src='\images\bodega3.jpg' height="420" width="327" />
                </div>
                <div className="cart-info">
                    <div className="cart-text">
                        <h1>nombre</h1>
                        <h2>by BelWines</h2>
                    </div>
                    <div className="product-price-btn">
                        <p><span>precio</span>$</p>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart