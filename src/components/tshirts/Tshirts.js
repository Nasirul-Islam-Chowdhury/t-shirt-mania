import React from 'react';
import './tshirts.css'

const Tshirts = ({tshirt, handleAddToCart}) => {
    const {_id, index, price, picture, name, gender} = tshirt;
    return (
<div className="tshirt">
    <img className='tshirt-image' src={picture} alt="" />
    <h2>{name}</h2>
    <h4>Price: ${price}</h4>
    <button className='buy-btn' onClick={()=>handleAddToCart(tshirt)}>Buy Now</button>
</div>
    );
};

export default Tshirts;