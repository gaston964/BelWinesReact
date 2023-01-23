import React from 'react'
import { AiOutlineInstagram, AiOutlineWhatsApp, AiFillMail, AiFillFacebook } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footerLink'>
                    <Link to={"/"}>INICIO</Link>
                    <Link to={'/bodegas'}>BODEGAS</Link>
                    <Link to={'/vinos'}>VINOS</Link>
                    <Link to={'/promos'}>PROMOCIONES</Link>
                    <Link to={'/comments'}>COMENTARIOS</Link>
                </div>
                <div className='footerRedes'>
                    <ul className='wrapperFooter'>
                        <li className='icon whatsapp'><a href="http://wa.me/542616225067?text=Cual es su consulta?" target="_blank" rel="noopener noreferrer"><AiOutlineWhatsApp /></a><span className='tooltip'>Whatsapp</span></li>
                        <li className='icon facebook'><a href="https://www.facebook.com/profile.php?id=100063765497079" target="_blank" rel="noopener noreferrer"><AiFillFacebook /></a><span className='tooltip'>Facebook</span></li>
                        <li className='icon instagram'><a href="https://www.instagram.com/bel.wines/" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram /></a><span className='tooltip'>Instagram</span></li>
                        <li className='icon gmail'><a href="mailto:belwinesmendoza@gmail.com" target="_blank" rel="noopener noreferrer"><AiFillMail /></a><span className='tooltip'>Gmail</span></li>
                    </ul>
                </div>
                <div className='footerLogo'>
                    <img src='https://drive.google.com/uc?export=view&id=1K0MB2jmS7PZNjWOD-gLOsQKaxkXkS2rP' alt="logobel" />
                </div>
            </div>
        </>
    )
}

export default Footer