import React from 'react'
import "./item.css"

const Item = ({ nombre, precio, img, descripcion }) => {
    return (
        <>
            <div className="wrapper">
                <div className="product-img">
                    <img src={img} height="420" width="327" />
                </div>
                <div className="product-info">
                    <div className="product-text">
                        <h1>{nombre}</h1>
                        <h2>by BelWines</h2>
                        <p><strong>{descripcion}</strong></p>
                    </div>
                    <div className="product-price-btn">
                        <p><span>{precio}</span>$</p>
                        <button type="button">buy now</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Item