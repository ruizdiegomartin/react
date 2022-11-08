
import React, {useState, useEffect} from 'react'
import ItemList from "./ItemList";
import candle from '../img/product_soy-candle.jpg'
import splash from '../img/product_splash.jpg'
import soap from '../img/product_liquid-soap.jpg'
import diffuser from '../img/product_diffuser.jpg'
import aromaticBag from '../img/product_aromatic-bag.jpg'
import silverCandle from '../img/product_silver-candle.png'
import nordicBlanket from '../img/product_nordic-blanket.jpg'
import carDiffuser from '../img/product_car-diffuser.jpg'
import bubbleCandle from '../img/product_bubble-candle.jpg'
import { useParams } from 'react-router-dom';


export default function ItemListContainer () {

    const { idcategory } = useParams();

    const Products = [
        {id:1, name: "Candle", description: "It's a soy candle.", price: 600, pictureURL: candle, stock: 10, category: "candles"},
        {id:2, name: "Splash", description: "It's a splash.", price: 800, pictureURL: splash, stock: 15, category: "diffusers"},
        {id:3, name: "Liquid Soap", description: "It's a nice soap.", price: 650, pictureURL: soap, stock: 23, category: "others"},
        {id:4, name: "Diffuser", description: "It's a great diffuser.", price: 500, pictureURL: diffuser, stock: 25, category: "diffusers"},
        {id:5, name: "Aromatic Bag", description: "It's a small bag.", price: 300, pictureURL: aromaticBag, stock: 15, category: "diffusers"},
        {id:6, name: "Silver Candle", description: "It's a soy candle in a metallic bowl. This is a Test", price: 750, pictureURL: silverCandle, stock: 20, category: "candles"},
        {id:7, name: "Nordic Blanket", description: "It's a nordic blanket.", price: 5000, pictureURL: nordicBlanket, stock: 5, category: "others"},
        {id:8, name: "Car Diffuser", description: "It's a hanging air freshener.", price: 450, pictureURL: carDiffuser, stock: 15, category: "diffusers"},
        {id:9, name: "Bubble Candle", description: "It's a bubble-shaped candle.", price: 700, pictureURL: bubbleCandle, stock: 22, category: "candles"}
    ];  

    const [Catalogue, setCatalogue] = useState([]) 

    useEffect(() => {
        const fetching = new Promise((resolve, reject) => {
            setCatalogue([])
            setTimeout(() => {
                resolve(Products)
            }, 2000);
        })
        fetching.then( res => {
            if (idcategory) {
                setCatalogue(res.filter((productos) => productos.category === idcategory))
            }
            else {
                setCatalogue(res)
            }
        })
        .catch((err) => console.log(err))
    }, [idcategory])

    return ( 
            <div className="item-list-container">
                <ItemList products={Catalogue}/>  
            </div>
        )
};

