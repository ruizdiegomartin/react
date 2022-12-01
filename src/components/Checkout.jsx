

import React, {useContext, useState} from 'react'
import '../styles/Checkout.css'
import { contextForCart } from './CartContext';
import { collection, getFirestore, addDoc, writeBatch, doc, increment } from 'firebase/firestore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';



export default function Checkout() {

    const {cart, setCart, totalPrice} = useContext(contextForCart);
    const carritoTest = cart.map((item)=> { return {id:item.id, title:item.name, price:(item.price*item.amount), quantity:item.amount} }) 
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [orderId, setOrderId] = useState("")
    const [payConfirmed, setPayConfirmed] = useState(false);
    const [message, setMessage] = useState("");

    function validateEmail(email){
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    
        if (reg.test(email) === false) 
        {
            // alert('Invalid Email Address');
            return false;
        }
        else {return true};
    }

    function validateConfirmEmail(email){
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    
        if (reg.test(email) === false) 
        {
            // alert("Mail doesn't match");
            return false;
        }
        else {return true};
    }

    function validateName(name){
        let reg = /^([a-zA-Z]{2,})\s([a-zA-Z]{2,})\s?([a-zA-Z]{2,})?\s?([a-zA-Z]{2,})?\s?([a-zA-Z]{2,})?\s?([a-zA-Z]{2,})?$/
    
        if (reg.test(name) === false) 
        {
            // alert('Invalid Name');
            return false;
        }
        else {return true};
    }

    function validatePhone(phone){
        let reg = /^[\+]?[(]?([0-9]{2,5})?[)]?[-\s\.]?[0-9]{4}[-\s\.]?[0-9]{4}$/
    
        if (reg.test(phone) === false) 
        {
            // alert('Invalid Phone Number');
            return false;
        }
        else {return true};
    } 

    function validateInputs () {
        if (validateEmail(mail) === false || validateConfirmEmail(mail) === false || confirmEmail !== mail || validateName(name) === false || validatePhone(phone) === false) {
            return false;
        }
        else {return true};
    }

    function showAdvise (msg) {
        setMessage(<p className='confirm-warning'> {msg} </p>)
        setTimeout(()=>{
            setMessage(<p> </p>)  
        }, 1500)
    }

    function sendOrder (){
        if (validateInputs() === false || totalPrice <= 0) {
            return;
        };
        let time = new Date();
        const Order = { 
            buyer : {name, phone, mail}, 
            items: carritoTest, 
            total: totalPrice, 
            status: "submitted",
            date: time
        }
        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, Order).then(({id})=> setOrderId(id))
        cart.forEach((item)=> updateStock(item))
        localStorage.removeItem("cart");
        setPayConfirmed(true)
        setCart([]);
        // }
    }

    function updateStock(product) {
        const db = getFirestore(); 
        const batch = writeBatch(db);
        const prodRef = doc(db, "Products", product.id)
        batch.update(prodRef, { "stock": increment(-(product.amount)) })
        batch.commit();
    }

  return (
    <div className='checkout-form-wrapper'>
        {payConfirmed
        ?   <div className='confirmed-purchase-div'> 
                <p>The order has been processed correctly. <CheckCircleIcon/> </p>
                <p>Your purchase identifier number is: <span className='id-order-number'>{orderId}</span></p>
                <p> ¡See you soon! </p>
            </div>
        : <article className='checkout-main'>
            <div className='main-title__container'>
                <h2>Checkout</h2>
            </div>
            <div className='summary-wrapper'>
                <form action="" onSubmit={(e)=> e.preventDefault()} className='checkout-form'>
                    <div className='form-group'>
                        <label htmlFor="" className='form-group__label'> Name </label>
                        <input type="text" className={validateName(name) ? 'form-group__input-valid' :'form-group__input-invalid'} placeholder='Full Name' value={name} onChange={(e)=> setName(e.target.value)} />
                        <div className={validateName(name) ? 'check-validated-circle' :'check-invalid-circle'}><CheckCircleIcon /></div> 
                    </div>
                    <div className='form-group'>
                        <label htmlFor="" className='form-group__label'> Email </label>
                        <input type="text" className={validateEmail(mail) ? 'form-group__input-valid' :'form-group__input-invalid'} placeholder='example@example.com' value={mail} onChange={(e)=> setMail(e.target.value)} />
                        <div className={validateEmail(mail) ? 'check-validated-circle' :'check-invalid-circle'}><CheckCircleIcon /></div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="" className='form-group__label'> Confirm email </label>
                        <input type="text" className={validateConfirmEmail(confirmEmail) && mail === confirmEmail ? 'form-group__input-valid' :'form-group__input-invalid'} placeholder='example@example.com' value={confirmEmail} onChange={(e)=> setConfirmEmail(e.target.value)} />
                        <div className={ (validateConfirmEmail(confirmEmail) && mail === confirmEmail) ? 'check-validated-circle' :'check-invalid-circle'}><CheckCircleIcon /></div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="" className='form-group__label'> Phone </label>
                        <input type="text" className={validatePhone(phone) ? 'form-group__input-valid' :'form-group__input-invalid'} placeholder='1122223333 / 41112222' value={phone} onChange={(e)=> setPhone(e.target.value)} />
                        <div className={validatePhone(phone) ? 'check-validated-circle' :'check-invalid-circle'}><CheckCircleIcon /></div>
                    </div>
                    { validateInputs()
                    ? <button type="submit" className='confirm-order-btn' onClick={()=> { sendOrder()}}> CONFIRM ORDER </button>
                    : <><button type="submit"  className='confirm-order-btn-disabled' onClick={()=> { showAdvise ("Invalid fields detected.")}}> CONFIRM ORDER </button>
                        {message}</>
                    }
                </form>
                <div className='checkout-summary'>
                    <div>
                        <h2 > Summary </h2>
                        <p> You're carrying the following products</p>
                    </div>
                    <div className='summary-section__products-wrapper'>
                        {cart.map((product)=>{ return <article className='summary-section__product' key={product.id} >
                                <img className='summary-section__img' src={product.pictureURL} alt={product.name} />
                                <h3 className='summary-section__name'> {product.name} </h3>
                                <p className='summary-section__quantity'> x{product.amount} </p>
                            </article>
                        })
                        }
                    </div>
                    <p className='checkout-summary-totalprice'> Total: <span>${totalPrice}</span></p>
                </div>
            </div>
        </article>
        }
    </div>
    
  )
}
