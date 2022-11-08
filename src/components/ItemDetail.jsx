import React from 'react'
import "../styles/ItemDetail.css"
import ItemCount from './ItemCount'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function ItemDetail({product}) {
  return (
    
    <article className='product-wrapper'>
        <div className='section-img'>
            <button className='back-to-shop-btn' id={product.id}>
              <div className='back-to-shop-btn-circle'>
                <ArrowBackIosIcon/>
              </div>
            </button>
          <img className='product-detail-img' src={product.pictureURL} alt="product img" />
        </div>
        <div className='section-detail-info'>
          <h2 className='product-detail-title'> {product.name} </h2>
          <p className='product-detail-price'> ${product.price} </p>
          <div className='product-info-group'>
            <h3> Product description: </h3>
            <p className='product-detail-description'> {product.description} </p>
          </div>
          <div className='product-info-group'>
            <h3>Quantity: </h3>
            <ItemCount product={product} />
          </div>
          <div className='product-info-group'>
            <h3> Product stock: </h3>
            <p> {product.stock} units availables. </p>
          </div> 
        </div>
    </article>
  )
}
