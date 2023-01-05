import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const addToCart = (item, cantidad) => {
        const existInCart = cart.find((prod) => prod.id === item.id)
    if (existInCart) {
        const cartUpdate = cart.map((prod) => {
            if(prod.id === item.id){
                return {...prod, cantidad: prod.cantidad + cantidad}
            }
            return prod;
        })
        setCart(cartUpdate)
        window.sessionStorage.setItem("cart", JSON.stringify(cartUpdate))
    } else {
        setCart([...cart, {...item, cantidad}])
        window.sessionStorage.setItem("cart", JSON.stringify(cart))
    }

    }
    const removeItem = (id) => {
        const itemUpdate = cart.filter((item => item.id !== id))
        setCart(itemUpdate)
    }
    const emptyCart = (cart) => {
        setCart([]);
    }
    function getTotalItemCount() {
        let total = 0;
        cart.forEach(itemInCart => {
            total += itemInCart.cantidad
        })
        return total;
    }
    const getTotalPrice = () => {
        let totalPrice = 0;
        cart.forEach(itemInCart => {
            totalPrice = totalPrice + itemInCart.cantidad * itemInCart.precio
        })
        return totalPrice;
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeItem,
            emptyCart,
            getTotalItemCount,
            getTotalPrice,
        }}>
            {children}
        </CartContext.Provider>
    )
}