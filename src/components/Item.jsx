import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import "./item.css"

const Item = ({ id, nombre, precio, img, descripcion }) => {
    const {cart, addToCart} = useContext(CartContext)
    const addHandler = () => {
        let producto={id,nombre, precio, img, descripcion}
        addToCart(producto, 1)
        console.log(cart);
        }
    return (
        <>
            <div className="wrapper" key={id}>
                <div className="product-img">
                    <img src={img} height="420" width="327" />
                </div>
                <div className="product-info">
                    <div className="product-text">
                        <h1>{nombre}</h1>
                        <h2>by BelWines</h2>
                        <p><strong>{descripcion}</strong></p>
                    </div>
                    <div className="product-price-btn">
                        <p>$<span>{precio}</span></p>
                        <button type="button" onClick={addHandler}>Comprar</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Item