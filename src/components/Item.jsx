import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Item.css'

export default function Item({title, picture, description, price, id, stock}) {

  return (
    <>
      <img className='card-product-img' src={picture} alt={title} />
      <div>
      <h2 className='product-card-title'> {title} </h2>
        <p className='product-card-description'> {description} </p>
        <div className='card-product-group'>
          <Link to={`/item/${id}`}><button className="product-card-button"> VER MAS </button></Link>
          <p> ${price} </p>
        </div>
        <p className='stock-info'> Stock: {stock} units </p>
      </div> 
    </>
  )
}
