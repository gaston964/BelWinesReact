import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import './myform.css'
import emailjs from 'emailjs-com';

const MyForm = () => {
    const { cart, getTotalPrice } = useContext(CartContext)
    const [order, setOrder] = useState('')
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_vhtseta', 'template_fzr8tha', e.target, 'I7ptfzCJNNyJUimnH')
            .then((result) => {
                setOrder(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <>
                {order ? 
                <div className='containerCondicional'>
                    <h2>Muchas Gracias por su compra, su pedido ya fue enviado! {order}</h2>
                    <h3>Saludos de BelWines!</h3>
                    <img src="/images/logobel3.JPG" alt="" />
                </div>
                : 
            <form className="container" onSubmit={sendEmail}>
                <h1 className="title">Formulario de Envío</h1>
                <div className="row">
                    <div className="inputbox">
                        <input type="text" name='name' id="name" required />
                        <label htmlFor="name">Nombre y Apellido</label>
                    </div>
                    <div className="inputbox">
                        <input type="text" name='email' id="email" required />
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="inputbox">
                        <input type="text" name='CP' id="cep" required />
                        <label htmlFor="cep">Codigo Postal</label>
                    </div>
                    <div className="inputbox">
                        <input type="text" name='adress' id="endereco" required />
                        <label htmlFor="endereco">Dirección</label>
                    </div>
                </div>
                <div className="row">
                    <div className="inputbox">
                        <input type="text" name='city' id="cidade" required />
                        <label htmlFor="cidade">Ciudad</label>
                    </div>
                    <div className="inputbox">
                        <input type="text" name='state' id="cidade" required />
                        <label htmlFor="cidade">Departamento</label>
                    </div>
                    <div className="inputbox">
                        <input type="text" name='phone' id="phone" required />
                        <label htmlFor="phone">Número de celular</label>
                    </div>
                </div>
                <div className="row">
                    <div className="labelCart">
                        <label htmlFor="cart" className='title'>Carrito de compras:</label>
                        <textarea name="cart" id='cart' className='textareaCart' value={cart.map(item => `${item.descripcion}, (${item.cantidad} x $${item.precio} = $${item.cantidad * item.precio}).\nTotal=$${getTotalPrice()}`).join(', ')} readOnly />
                    </div>
                </div>
                <div className="row">
                    <button id="btn">Enviar</button>
                </div>
            </form>
                
                }
        </>
    )
}

export default MyForm




/* 

<form className='form' onSubmit={sendEmail}>
                <label>
                    Nombre:
                    <input type="text" name="name" />
                </label>
                <br />
                <label>
                    Correo electrónico:
                    <input type="email" name="email" />
                </label>
                <br />
                <br />
                <label>
                    Carrito de compras:
                    <textarea name="cart" value={cart.map(item => `${item.descripcion}, (${item.cantidad} x $${item.precio} = $${item.cantidad * item.precio})`).join(', ')} readOnly />
                </label>
                <br />
                <label>
                    Mensaje:
                    <textarea name="message"></textarea>
                </label>
                <br />
                <input type="submit" value="Enviar" />
            </form>
*/