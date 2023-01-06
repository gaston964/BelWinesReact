import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Item from './Item'

const ItemListContainer = () => {
    const { id } = useParams()
    const [items, setItems] = useState([])
    useEffect(() => {
        vinos()
    }, [id])
    const vinos = async () => {
        let response = await fetch("https://raw.githubusercontent.com/gaston964/JSON/main/BelProducts")
        let data = await response.json();
        id ? setItems(data.filter((item)=> item.category === id)) : setItems(data)
        
    }

    return (
        <div >
            <div className="containerCategory">
                <Link to={'/vinos/category/Tintos'}><h3>Tintos</h3></Link>
                <Link to={'/vinos/category/Blancos'}><h3>Blancos</h3></Link>
                <Link to={'/vinos/category/Rosados'}><h3>Rosados</h3></Link>
                <Link to={'/vinos/category/Espumantes'}><h3>Espumantes</h3></Link>
            </div>
            <div className='itemContainer'>
                {items.map(i => <Item key={i.id} {...i}/>)}
            </div>
        </div>
    )
}

export default ItemListContainer