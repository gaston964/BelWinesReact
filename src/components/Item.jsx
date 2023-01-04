import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import "./item.css"

const Item = ({ nombre, precio, img, descripcion }) => {
    const {cart, addToCart} = useContext(CartContext)
    const [quantity, setquantity] = useState(0)
    const addHandler = (cantidad) => {
        addToCart(Item, cantidad)
        setquantity(cantidad)
    }
    return (
        <>
            <div className="wrapper">
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
                        <p><span>{precio}</span>$</p>
                        <button type="button" onClick={addHandler}>buy now</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Item