import React from 'react';
import './cart.css'

const Cart = ({cart, deleteItems}) => {
    return (
        <div className='order'>
      <h1 className={`green ${cart.length=== 1? "red" : "yellow"}`}>Order Summary</h1>
      <h5>Order Quantity {cart.length}</h5>
     <div className='cart'>
     {
        cart.map(tshirt => <div
        key={tshirt._id}>
        <ul>
            <li className='text'>{tshirt.name} 
        <button onClick={()=>deleteItems(tshirt)}>x</button></li>
        </ul>
        </div>)
      }
     </div>
      {cart.length === 0? <p>Buy Something</p>: <p>Thanks For shopping</p>}
        </div>
    );
};
export default Cart;