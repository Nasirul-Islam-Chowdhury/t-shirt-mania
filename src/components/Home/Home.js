import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom'
import Cart from '../cart/Cart';
import Tshirts from '../tshirts/Tshirts';
import './home.css'

const Home = () => {

    const tshirts = useLoaderData()
    const [cart, setCart] = useState([])
    const handleAddToCart = (tshirts) => {
        const exists = cart.find(ts => ts._id === tshirts._id);
        if (exists) {
            alert("Already Added")
        } else {
            const newCart = [...cart, tshirts];
            setCart(newCart);
        }
    }
    const deleteItems = (tshirt) =>{
        const itemDeleted = cart.filter(ts => ts._id !== tshirt._id);
        if(itemDeleted){
            setCart(itemDeleted)
        }
    }
    return (
        <div>
            <div className='home-container'>
                <div className="tshirt-container">
                    {
                        tshirts.map(tshirt => <Tshirts
                            key={tshirt._id}
                            tshirt={tshirt}
                            handleAddToCart={handleAddToCart}
                        ></Tshirts>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart deleteItems={deleteItems} cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;