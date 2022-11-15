import React, { useState, useContext } from 'react'
import "../styles/ItemDetail.css"
import ItemCount from './ItemCount'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { contextForCart } from './CartContext';

export default function ItemDetail({product}) {
  const {addItem} = useContext(contextForCart);
  const [productAdded, setProductAdded] = useState(false);
  const [availableStock, setAvailableStock] = useState(product.stock)

  function onAdd(quantity) {
    addItem(product, quantity)
    setProductAdded(true);
    setAvailableStock(product.stock - quantity)
  }

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
            <h3 className='item-count-label'>Quantity: </h3>
            {productAdded ? 
              <Link to='/cart'><button className="add-to-cart-btn"> SEE BAG <LocalMallIcon/></button></Link> :
              <ItemCount startValue={1} maxLimit={product.stock} task={onAdd} product={product} />
            }
          </div>
          <div className='product-info-group'>
            <h3> Product stock: </h3>
            <p> {availableStock} units availables. </p>
          </div> 
        </div>
    </article>
  )
}
