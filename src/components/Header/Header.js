import React from 'react';
import {Link} from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <nav className="navigation">
            <h1><Link className='home' to={'/'}>Home</Link></h1>
            
        </nav>
    );
};

export default Header;