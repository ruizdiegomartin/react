
import React, {useState, useEffect} from 'react'
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'


export default function ItemListContainer () {

    const { idcategory } = useParams(); 
    const [Catalogue, setCatalogue] = useState([]) 

    useEffect(() => {
        const db = getFirestore();

        let productsCollection = [];
        (idcategory) ?  
        productsCollection = query(collection(db, 'Products'), where('category', '==', idcategory)) :
        productsCollection = collection(db, 'Products');

        getDocs(productsCollection).then((res) => {
            const productsForCatalogue = res.docs.map((doc)=>{
                return {id: doc.id, name: doc.data().name, description: doc.data().description, price: doc.data().price, pictureURL: doc.data().pictureURL, stock: doc.data().stock, category: doc.data().category }
        });

        setCatalogue(productsForCatalogue);
        })

        getDocs(productsCollection).catch((err)=> console.log(err));

    }, [idcategory])

    return ( 
            <div className="item-list-container">
                <ItemList products={Catalogue}/>  
            </div>
        )
};

