import React, { useContext } from 'react'
import { MdAddShoppingCart } from "react-icons/md";
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
    const {getTotalItemCount} = useContext(CartContext)
    return (
        <>
        <button className="cartWidget"><MdAddShoppingCart/><span>{getTotalItemCount()}</span></button>
        
        </>
    )
}

export default CartWidget