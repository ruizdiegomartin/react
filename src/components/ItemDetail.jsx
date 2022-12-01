import React, { useState, useContext } from "react";
import "../styles/ItemDetail.css";
import ItemCount from "./ItemCount";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { contextForCart } from "./CartContext";

export default function ItemDetail({ product }) {
  const { addItem, maxLimitReached } = useContext(contextForCart);
  const [productAdded, setProductAdded] = useState(false);

  function onAdd(quantity) {
    addItem(product, quantity);
    setProductAdded(true);
  }

  return (
    <article className="product-wrapper">
      {maxLimitReached ? (
        <div className="warning-wrapper">
          <div className="warning-message-container">
            <p>
              Maximum limit reached: you're trying to add more units than
              current stock.
            </p>
          </div>{" "}
        </div>
      ) : (
        ""
      )}
      <div className="section-img">
        <img
          className="product-detail-img"
          src={product.pictureURL}
          alt={product.name}
        />
      </div>
      <div className="section-detail-info">
        <Link to="/">
          <button className="back-btn">
            <div className="back-btn-circle">
              <ArrowBackIosIcon />
            </div>
          </button>
        </Link>
        <h2 className="product-detail-title"> {product.name} </h2>
        <p className="product-detail-price"> ${product.price} </p>
        <div className="product-info-group">
          <h3> Product description: </h3>
          <p className="product-detail-description"> {product.description} </p>
        </div>
        {product.stock > 0 ? (
          <div className="product-info-group">
            <h3 className="item-count-label">Quantity: </h3>
            {productAdded ? (
              <Link to="/cart">
                <button className="add-to-cart-btn">
                  {" "}
                  SEE BAG <LocalMallIcon />
                </button>
              </Link>
            ) : (
              <ItemCount
                startValue={1}
                maxLimit={product.stock}
                task={onAdd}
                product={product}
              />
            )}
          </div>
        ) : (
          ""
        )}
        <div className="product-info-group">
          <h3> Product stock: </h3>
          <p> {product.stock} units availables. </p>
        </div>
      </div>
    </article>
  );
}
