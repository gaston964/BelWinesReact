import React from 'react'
import { AiOutlineInstagram, AiOutlineWhatsApp, AiFillMail, AiFillFacebook } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footerLink'>
                    <Link to={"/"}>Inicio</Link>
                    <Link to={'/promos'}>Promos</Link>
                    <Link to={'/vinos'}>Vinos</Link>
                </div>
                <div className='footerRedes'>
                    <ul className='wrapperFooter'>
                        <li className='icon whatsapp'><a href="https://web.whatsapp.com/send?phone=+542616225067" target="_blank" rel="noopener noreferrer"><AiOutlineWhatsApp /></a><span className='tooltip'>Whatsapp</span></li>
                        <li className='icon facebook'><a href="https://www.facebook.com/profile.php?id=100063765497079" target="_blank" rel="noopener noreferrer"><AiFillFacebook /></a><span className='tooltip'>Facebook</span></li>
                        <li className='icon instagram'><a href="https://www.instagram.com/bel.wines/" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram /></a><span className='tooltip'>Instagram</span></li>
                        <li className='icon gmail'><a href="mailto:belwinesmendoza@gmail.com" target="_blank" rel="noopener noreferrer"><AiFillMail /></a><span className='tooltip'>Gmail</span></li>
                    </ul>
                </div>
                <div className='footerLogo'>
                    <img src='\images\logobel2.png' alt="logobel" />
                </div>
            </div>
            <a href="mailto:"></a>
        </>
    )
}

export default Footer