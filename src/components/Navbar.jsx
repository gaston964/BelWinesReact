import React, { useState } from 'react'
import { GoGrabber } from "react-icons/go";
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <nav>
                <div className="open">
                    <div className='logolink'>
                        <Link to={'/'}>
                            <img src="https://drive.google.com/uc?export=view&id=1K0MB2jmS7PZNjWOD-gLOsQKaxkXkS2rP" alt="Logo" />
                            BELWINES
                        </Link>
                    </div>
                    <div className="navLink">
                        <Link to={'/'}>INICIO</Link>
                        <Link to={'/bodegas'}>BODEGAS</Link>
                        <Link to={'/vinos'}>VINOS</Link>
                        <Link to={'/promos'}>PROMOCIONES</Link>
                        <Link to={'/comments'}>COMENTARIOS</Link>
                    </div>
                    <Link to={"/cart"}>
                    <CartWidget/>
                    </Link>
                </div>
                <div className="close">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}><GoGrabber /></button>
                    <div className={isMenuOpen ? 'closeMenu' :  'open'}>
                        <Link to={'/'} onClick={() => setIsMenuOpen(false)}>INICIO</Link>
                        <Link to={"/bodegas"} onClick={() => setIsMenuOpen(false)}>BODEGAS</Link>
                        <Link to={"/vinos"} onClick={() => setIsMenuOpen(false)}>VINOS</Link>
                        <Link to={'/promos'} onClick={() => setIsMenuOpen(false)}>PROMOCIONES</Link>
                        <Link to={'/promos'} onClick={() => setIsMenuOpen(false)}>COMENTARIOS</Link>
                    </div>
                    <Link to={"/cart"}>
                    <CartWidget/>
                    </Link>
                </div>
            </nav>
        </>
    );
};


export default Navbar