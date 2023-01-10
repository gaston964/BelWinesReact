import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const Cart = ({ condition }) => {
    const { cart, removeItem, emptyCart, getTotalPrice } = useContext(CartContext)
    condition = cart.length === 0;
    return (
        <>
            <div className="container">
                {condition &&
                    <div className='cartPadreCondicional'>
                        <h2>No hay Items en el Carrito</h2>
                        <Link to={"/"}>
                            <button className='cartBtn'>Volver al inicio</button>
                        </Link>
                    </div>
                }
                {!condition &&
                    cart.map(cartItm => {
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
                    })
                }
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