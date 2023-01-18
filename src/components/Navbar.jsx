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
                            <img src="/images/logobel2.png" alt="Logo" />
                            BelWines
                        </Link>
                    </div>
                    <div className="navLink">
                        <Link to={'/promos'}>PROMOS</Link>
                        <Link to={'/vinos'}>VINOS</Link>
                        <Link to={'/bodegas'}>BODEGAS</Link>
                    </div>
                    <Link to={"/cart"}>
                    <CartWidget/>
                    </Link>
                </div>
                <div className="close">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}><GoGrabber /></button>
                    <div className={isMenuOpen ? 'open' : 'closeMenu'}>
                        <Link to={'/'}>INICIO</Link>
                        <Link to={'/promos'}>PROMOS</Link>
                        <Link to={"/vinos"}>VINOS</Link>
                        <Link to={"/bodegas"}>BODEGAS</Link>
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