import React from 'react'
import CustomAnnouncement from './CustomAnnouncement';


const SobreNos = () => {
    return (
        <>
            <div className="sobrenosContainer">
                <div className='inicio'>
                    {/*  */}
                </div>
                <CustomAnnouncement />
                <div className="sobrenosInfo">
                    <h3>Mi nombre es Belen Villarroel Villarroel, fundadora de BelWines.</h3>
                    <p>
                        BelWines es una Vinoteca Online ubicada en Mendoza, Argentina. El proyecto nació en Mayo 2020, buscando una salida laboral en plena pandemia. Los primeros clientes fueron amigos y conocidos. Luego de eso, el negocio comenzó a crecer y empezamos no solo a vender en Mendoza, sino que también a otras provincias.
                        La idea del emprendimiento es ofrecer vinos de MENDOZA que no puedan encontrar en góndolas de supermercados
                    </p>
                    <p> Hacemos envíos a todo el país , a través de Andesmar Cargas o Andreani. La demora aproximada es de 7 días hábiles. El costo del envío es sin cargo para Gran Mendoza y para la sección “PROMOCIONES”</p>
                    <h3>
                        Hacemos factura “C”</h3>
                    <h2>LOS INVITO A CONOCERME</h2>
                </div>
                <div>
                    <img className='inicioBel' src='/images/belbodega.jpg' alt="Image 1" />
                </div>
            </div>
        </>
    );
}


export default SobreNos


/* <p>Bel Wines es un emprendimiento que nació en Mayo 2020 ( pandemia ).
                    Mi nombre es Belén Villarroel, soy Técnica en Turismo. El sector al que yo me dedico, fué
                    muy afectado por la pandemia. Algunos fuimos suspendidos o despedidos.
                    La idea del emprendimiento es ofrecer productos que no puedan encontrar en góndolas de supermercado</p> 
                    
                    <img src="/images/sobrenos.jpg" alt="" />
                    
                    */