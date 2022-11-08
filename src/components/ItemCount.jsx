import React, {useState, useEffect} from "react";
import '../styles/ItemCount.css'
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from '@mui/icons-material/LocalMall';

export default function ItemCount ({product}) {
    const [cart, setCart] = useState([]);
    const [counter, setCounter] = useState(1);
    // const [favState, setFavState] = useState(false)
    
    const onAdd = () => {
        (counter < product.stock && counter.stock !== 0 ) ? setCounter(counter+1) : alert("No puede agregar más, stock agotado");
    }
    const onSubstract = () => {
        (counter > 1 ) ? setCounter(counter-1) : alert("No se puede quitar mas");
    }
    const addToCart = (product) => {
        setCart(cart.push(product));
        console.log(cart);
    }
    const updateProductAmount = (product) => {
        product.amount = counter;
    }
    // const addToWishlist = (product) => {
    //     if (favState) {
    //     console.log(product.name+" removed from Wishlist")
    //     setFavState(false);
    //     } else {
    //     console.log(product.name+" added to Wishlist");
    //     setFavState(true);
    //     }
    // }

    useEffect(() => {
        updateProductAmount(product);
    }, [counter]);


    return(
        <div className="counter-wrapper">
            <section className="left-side">
                <div className="item-counter">
                    <button className="substract-btn" onClick={()=> onSubstract()}> - </button>
                    <p className="amount-number"> {counter} </p>
                    <button className="add-btn" onClick={()=> onAdd()}> + </button>
                </div>
            </section>
            <section className="right-side">
                <button className="add-to-cart-btn" onClick={()=>{ addToCart(product)}}>ADD TO BAG <LocalMallIcon/></button>
            </section>
            {/* <button onClick={()=>{addToWishlist(product)}}><FavoriteBorderIcon/></button> */}
        </div>
    )
};