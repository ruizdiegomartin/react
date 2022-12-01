import React, { useEffect, useState } from "react";
import "../styles/ItemListContainer.css";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export default function ItemDetailContainer() {
  const { iditem } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const Item = doc(db, "Products", iditem);
    getDoc(Item).then((singleProduct) => {
      if (singleProduct.exists()) {
        setProduct({
          id: iditem,
          name: singleProduct.data().name,
          description: singleProduct.data().description,
          price: singleProduct.data().price,
          pictureURL: singleProduct.data().pictureURL,
          stock: singleProduct.data().stock,
          category: singleProduct.data().category,
        });
      }
    });
    getDoc(Item).catch((err) => {
      console.log(err);
    });
  }, [iditem]);

  return !product.name ? (
    <div className="loading-wrapper">
      <div className="loading-circle"></div>
    </div>
  ) : (
    <>
      <ItemDetail product={product} />
    </>
  );
}
