import React, { useState, useEffect } from 'react'
import "../styles/ItemDetail.css"
import ItemCount from './ItemCount'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { contextForCart } from './CartContext';

export default function ItemDetail({product}) {
  const {cart, setCart, isInCart} = React.useContext(contextForCart);
  // const [cart, setCart] = useState([]);
  const [productAdded, setProductAdded] = useState(false);
  const [availableStock, setAvailableStock] = useState(1)
  
  // function onAdd(quantity) {
  //   product.amount = quantity;
  //   const upcomingProduct = [product];
  //   setCart([...cart, ...upcomingProduct]);
  //   setProductAdded(true);
  //   setAvailableStock(product.stock - quantity)
  // }

  // function onAdd(quantity) {
  //   if (isInCart(product.id)) {
  //     alert("Ya existe en el carrito")
  //   }
  //   else {
  //   product.amount = quantity;
  //   const upcomingProduct = [product];
  //   setCart([...cart, ...upcomingProduct]);
  //   setProductAdded(true);
  //   setAvailableStock(product.stock - quantity)
  //   }
  // }

  function onAdd(item, quantity) {
    if (isInCart(item.id)) {
      alert("Ya existe en el carrito")
    }
    else {
    item.amount = quantity;
    const upcomingProduct = [item];
    setCart([...cart, ...upcomingProduct]);
    setProductAdded(true);
    setAvailableStock(item.stock - quantity)
    }
  }


  useEffect(() => {
    setAvailableStock(product.stock)
  }, [product])

  // VER MODIFICACIONES EN EL CARRITO
  useEffect(() => {
    console.log(cart);
  }, [cart])
  // 

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
              <ItemCount startValue={1} maxLimit={product.stock} task={onAdd} />
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
