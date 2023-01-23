import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Item from './Item'
import Loader from './Loader'

const ItemListContainer = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [items, setItems] = useState([])
    useEffect(() => {
        vinos()
    }, [id])
    const vinos = async () => {
        setLoading(true)
        setTimeout(async () => {
            let response = await fetch("https://raw.githubusercontent.com/gaston964/JSON/main/BelProducts")
            let data = await response.json();
            setItems(data.filter((item)=> (item.category === id || !id) && item.category !== "Promos"))
            setLoading(false)
        }, 1500) // Resuelve la promesa en 1 segundo
    }

    return (
        <div className='containerVinos'>
            <div className="containerCategory">
                <Link to={'/vinos/category/Tintos'}><p>TINTOS</p></Link>
                <Link to={'/vinos/category/Blancos'}><p>BLANCOS</p></Link>
                <Link to={'/vinos/category/Rosados'}><p>ROSADOS</p></Link>
                <Link to={'/vinos/category/Espumantes'}><p>ESPUMANTES</p></Link>
            </div>
            <div className='itemContainer'>
                {loading ? <Loader /> : items.map(i => <Item key={i.id} {...i}/>)}
            </div>
        </div>
    )
}

export default ItemListContainer