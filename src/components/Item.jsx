import React from 'react'
import "./item.css"

const Item = () => {
    return (
        <>
            <div className="wrapper">
                <div className="product-img">
                    <img src="/images/Don Bosco2.jpg" height="420" width="327" />
                </div>
                <div className="product-info">
                    <div className="product-text">
                        <h1>Don Bosco</h1>
                        <h2>by BelWines</h2>
                        <p>Don Bosco Otro Loco Más Malbec</p>
                    </div>
                    <div className="product-price-btn">
                        <p><span>78</span>$</p>
                        <button type="button">buy now</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Item