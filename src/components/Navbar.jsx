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
                        <Link>
                            <img src="/images/logobel2.png" alt="Logo" />
                            BelWines
                        </Link>
                    </div>
                    <div className="navLink">
                        <Link>
                        Promos
                        </Link>
                        <Link>
                        Vinos
                        </Link>
                        <Link>
                            Envios
                        </Link>
                        <Link>
                            Sobre Nosotros
                        </Link>
                    </div>
                    <button className="cartWidget"><CartWidget/>8</button>
                </div>
                <div className="close">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}><GoGrabber /></button>
                    <div className={isMenuOpen ? 'open' : 'closeMenu'}>
                        <Link>
                        Promos
                        </Link>
                        <Link>
                        Vinos
                        </Link>
                        <Link>
                            Envios
                        </Link>
                        <Link>
                            Sobre Nosotros
                        </Link>
                    </div>
                    <button className="cartWidget"><CartWidget/>8</button>
                </div>
            </nav>
        </>
    );
};


export default Navbar