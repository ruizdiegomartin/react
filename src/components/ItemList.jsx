import React from "react";
import Item from "./Item";
import Loader from "./Loader";

export default function ItemList({ products }) {
  return !products.length ? (
    <Loader status={true} />
  ) : (
    <div className="cards-wrapper">
      {products.map((item) => {
        return (
          <article className="card-container" key={item.id}>
            <Item
              title={item.name}
              picture={item.pictureURL}
              description={item.description}
              price={item.price}
              id={item.id}
              stock={item.stock}
            />
          </article>
        );
      })}
    </div>
  );
}
