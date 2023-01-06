import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import './myform.css'
import emailjs from 'emailjs-com';

const MyForm = () => {
    const { cart, getTotalPrice, emptyCart } = useContext(CartContext)
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_jfojd4w', 'template_j1dj6xg', e.target, 'I7ptfzCJNNyJUimnH')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <>
            <form class="container" onSubmit={sendEmail}>
                <h1 class="title">Formulario de Envío</h1>
                <div class="row">
                    <div class="inputbox">
                        <input type="text" name='name' id="name" required />
                        <label for="name">Nombre y Apellido</label>
                    </div>
                    <div class="inputbox">
                        <input type="text" name='email' id="email" required />
                        <label for="email">Email</label>
                    </div>
                </div>
                <div class="row">
                    <div class="inputbox">
                        <input type="text" name='CP' id="cep" required />
                        <label for="cep">Codigo Postal</label>
                    </div>
                    <div class="inputbox">
                        <input type="text" name='adress' id="endereco" required />
                        <label for="endereco">Dirección</label>
                    </div>
                    <div class="inputbox">
                        <input type="text" id="numero" required />
                        <label for="numero">Número</label>
                    </div>
                </div>
                <div class="row">
                    <div class="inputbox">
                        <input type="text" name='city' id="cidade" required />
                        <label for="cidade">Departamento</label>
                    </div>
                    <div class="inputbox">
                        <input type="text" name='phone' id="phone" required />
                        <label for="phone">Número de celular</label>
                    </div>
                </div>
                <div className="row">
                    <div className="labelCart">
                    <label for="cart" className='title'>Carrito de compras:</label>
                    <textarea name="cart" id='cart' className='textareaCart' value={cart.map(item => `${item.descripcion}, (${item.cantidad} x $${item.precio} = $${item.cantidad * item.precio})`).join(', ')} readOnly />
                    </div>
                </div>
                <div class="row">
                    <button id="btn">Enviar</button>
                </div>
            </form>
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