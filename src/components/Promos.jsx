import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item'
import ItemPromo from './ItemPromo'
import Loader from './Loader'

const Promos = () => {
    const { category } = useParams()
    const [loading, setLoading] = useState(false)
    const [items, setItems] = useState([])
    useEffect(() => {
    promos()
    }, [category])
    
    const promos = async () => {
        setLoading(true)
        setTimeout( async () => {
            let response = await fetch("https://raw.githubusercontent.com/gaston964/JSON/main/BelProducts")
            let data = await response.json();
            setItems(data.filter((item) => (item.category === "Promos")))
            setLoading(false)
        }, 1500);
    }
    return (
        <>
        <div className="promos">
        {loading ? <Loader /> : items.map(i => <ItemPromo key={i.id} {...i}/>)} 
        </div>
        </>
    )
}

export default Promos