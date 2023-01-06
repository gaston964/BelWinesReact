import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const Cart = () => {
    const { cart, removeItem, emptyCart, getTotalPrice } = useContext(CartContext)
    return (
        <>
            <div className="container">
                {cart.map(cartItm => {
                    return (
                        <>
                            <div className="cartContainer">
                                <div className="cart-img">
                                    <img src={cartItm.img} height="420" width="327" />
                                </div>
                                <div className="cart-info">
                                    <div className="cart-text">
                                        <h1>{cartItm.nombre}</h1>
                                        <h2>by BelWines</h2>
                                        <h3>Cantidad: {cartItm.cantidad}</h3>
                                    </div>
                                    <div className="cart-price-btn">
                                        <p>$<span>{cartItm.precio}</span></p>
                                        <button className='' onClick={() => removeItem(cartItm.id)} >Eliminar</button>
                                        <h4>Subtotal: ${cartItm.cantidad * cartItm.precio} </h4>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
                <div className='cartBoE'>
                    <h3>Total: ${getTotalPrice()}</h3>
                    <button className='item-det-button' onClick={emptyCart}>Vaciar Carrito</button>
                    <Link to={'/form'} >
                        <button className={`item-det-button`} >Comprar</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Cart
/* 
<div className="cartContainer">
                    <div className="cart-img">
                        <img src={cartItm.img} height="420" width="327" />
                    </div>
                    <div className="cart-info">
                        <div className="cart-text">
                            <h1>{cartItm.nombre}</h1>
                            <h2>by BelWines</h2>
                        </div>
                        <div className="cart-price-btn">
                            <p>$<span>{cartItm.precio}</span></p>
                            <h4>Subtotal: ${cartItm.cantidad * cartItm.price} </h4>
                        </div>
                    </div>
                </div> 

<div className='cartBoE'>
                            <h3>Total: ${getTotalPrice()}</h3>
                            <button className='item-det-button' onClick={emptyCart}>Vaciar Carrito</button>
                            <Link to={"/form"} >
                                <button className={`item-det-button`} >Comprar</button>
                            </Link>
                        </div>




                <div className="cartContainer">
                    <div className="cart-img">
                        <img src='\images\bodega3.jpg' height="420" width="327" />
                    </div>
                    <div className="cart-info">
                        <div className="cart-text">
                            <h1>nombre</h1>
                            <h2>by BelWines</h2>
                        </div>
                        <div className="cart-price-btn">
                            <p><span>precio</span>$</p>
                        </div>
                    </div>
                </div> 
*/