import React, {useState} from "react";
import '../styles/ItemCount.css'
import LocalMallIcon from '@mui/icons-material/LocalMall';

export default function ItemCount ({startValue, maxLimit, task}) {

    const [counter, setCounter] = useState(startValue);
    
    function increaseAmount ()  {
        (counter < maxLimit) && setCounter(counter+1) 
    }
    function decreaseAmount () {
        (counter > 1 ) && setCounter(counter-1) 
    }

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
                <button className="add-to-cart-btn btn-responsive-width" onClick={()=> {task(counter)}}>ADD TO BAG<LocalMallIcon/></button>
            </section>
        </div>
    )
};