import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Loader from './Loader'

const Promos = ({id,nombre, precio, img, descripcion}) => {
    const {cart, addToCart} = useContext(CartContext)
    const addHandler = () => {
        let producto={id,nombre, precio, img, descripcion}
        addToCart(producto, 1)
        console.log(cart);
        }
    return (
        <>
        <div className="promos">
        <div className="wrapper" key={id}>
                <div className="product-img">
                    <img src='' height="420" width="327" />
                </div>
                <div className="product-info">
                    <div className="product-text">
                        <h1>Promo 1</h1>
                        <h2>by BelWines</h2>
                        <p><strong></strong></p>
                    </div>
                    <div className="product-price-btn">
                        <p><span>26500</span>$</p>
                        <button type="button" onClick={addHandler}>buy now</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Promos