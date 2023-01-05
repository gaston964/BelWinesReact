import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Item from './Item'

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        vinos()
    }, [])
    const { id } = useParams()
    const vinos = async () => {
        let response = await fetch("https://raw.githubusercontent.com/gaston964/JSON/main/BelProducts")
        let data = await response.json();
        setItems(data, id);
    }

    return (
        <div >
            <div className="containerCategory">
                <Link to={'/category/Tintos'}><h3>Tintos</h3></Link>
                <Link to={'/category/Blancos'}><h3>Blancos</h3></Link>
                <Link to={'/category/Rosados'}><h3>Rosados</h3></Link>
                <Link to={'/category/Espumantes'}><h3>Espumantes</h3></Link>
            </div>
            <div className='itemContainer'>
                {items.map(i => <Item key={i.id} {...i}/>)}
            </div>
        </div>
    )
}

export default ItemListContainer