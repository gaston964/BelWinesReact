import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import './itempromo.css'
const ItemPromo = ({ id, nombre, precio, img, descripcion, cajas }) => {
    const { cart, addToCart } = useContext(CartContext)
    const addHandler = () => {
        let producto = { id, nombre, precio, img, descripcion, cajas }
        addToCart(producto, 1)
    }
    return (
        <>
            <div className="card" key={id}>
                <div className="photo">
                    <img src={img}/>
                </div>
                <div className="description">
                    <h2>{nombre}</h2>
                    <h4>By BelWines</h4>
                    <h4>{cajas}</h4>
                    <p>{descripcion}</p>
                    <h1>${precio}</h1>
                    <button type="button" onClick={addHandler}>Comprar</button>
                </div>
            </div>
        </>
    )
}

export default ItemPromo