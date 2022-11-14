import React, {useState} from "react";
import '../styles/ItemCount.css'
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from '@mui/icons-material/LocalMall';


export default function ItemCount ({startValue, maxLimit, task}) {

    const [counter, setCounter] = useState(1);
    // const [cart, setCart] = useState([]);
    // const [counter, setCounter] = useState(1);
    // // const [favState, setFavState] = useState(false)
    
    const increaseAmount = () => {
        (counter < maxLimit) ? setCounter(counter+1) : alert("No puede agregar más, stock agotado");
    }
    const decreaseAmount = () => {
        (counter > 1 ) ? setCounter(counter-1) : alert("No se puede quitar mas");
    }
    // const addToCart = (product) => {
        
    // }
    // const amountAdded = () => {
    //     const amount = counter;
    // }
    // const addToWishlist = (product) => {
    //     if (favState) {
    //     console.log(product.name+" removed from Wishlist")
    //     setFavState(false);
    //     } else {
    //     console.log(product.name+" added to Wishlist");
    //     setFavState(true);
    //     }
    // }

    // useEffect(() => {
        
    // }, [counter]);


    return(
        <div className="counter-wrapper">
            <section className="left-side">
                <div className="item-counter">
                    <button className="substract-btn" onClick={ decreaseAmount }> - </button>
                    <p className="amount-number"> {counter} </p>
                    <button className="add-btn" onClick={ increaseAmount }> + </button>
                </div>
            </section>
            <section className="right-side">
                <button className="add-to-cart-btn" onClick={()=> {task(counter)}}>ADD TO BAG <LocalMallIcon/></button>
            </section>
            {/* <button onClick={()=>{addToWishlist(product)}}><FavoriteBorderIcon/></button> */}
        </div>
    )
};