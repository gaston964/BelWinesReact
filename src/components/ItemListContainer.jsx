import React from 'react'
import Item from './Item'
import ItemList from './ItemList'

const ItemListContainer = () => {
    return (
        <>
        <div className='itemlistContainer'>
        <ItemList/>
        <Item/>
        </div>
        
        </>
    )
}

export default ItemListContainer