import React from 'react'
import { AiOutlineInstagram, AiOutlineWhatsApp, AiFillMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footerLink'>
                    <Link to={"/"}>Inicio</Link>
                    <Link>Promos</Link>
                    <Link to={'/vinos'}>Vinos</Link>
                    <Link>Envios</Link>
                    {/* <Link>Sobre Nosotros</Link> */}
                </div>
                <div className='footerRedes'>
                    <ul className='wrapperFooter'>
                        <li className='icon facebook'><a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"><AiOutlineWhatsApp /></a><span className='tooltip'>Whatsapp</span></li>
                        <li className='icon instagram'><a href="http://instagram.com" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram /></a><span className='tooltip'>Instagram</span></li>
                        <li className='icon gmail'><a href="http://gmail.com" target="_blank" rel="noopener noreferrer"><AiFillMail /></a><span className='tooltip'>Gmail</span></li>
                    </ul>
                </div>
                <div className='footerLogo'>
                    <img src='\images\logobel.png' alt="logobel" />
                </div>
            </div>
        </>
    )
}

export default Footer