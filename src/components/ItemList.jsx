import React, {useState, useEffect} from 'react'
import Item from './Item';

export default function ItemList({products}) {

  return (
    (!products.length) ? <><div className='loading-wrapper'><div className='loading-circle'></div></div></> : products.map(item => { 
      return <article className='card-container' key={item.id}><Item  title={item.name} picture={item.pictureURL} description={item.description} price={item.price} id={item.id} stock={item.stock}/></article>
    })
  )
}
