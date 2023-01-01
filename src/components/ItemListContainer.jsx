import React, { useEffect, useState } from 'react'
import Item from './Item'

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        vinos()
    }, [])

    const vinos = async () => {
        let response = await fetch("https://raw.githubusercontent.com/gaston964/JSON/main/BelProducts")
        let data = await response.json();
        setItems(data);
    }

    return (
        <div >
            <div className='itemContainer'>
                {items.map(i => <Item key={i.id} {...i}/>)}
            </div>

        </div>
    )
}

export default ItemListContainer