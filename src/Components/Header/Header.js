import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

export default props => (
    <header className='main-header'>
        <Link className='link' to='/'><h2>Dev Blog</h2></Link>
        <nav className='nav-links'>
            <p>About</p>
            <p>Contact</p>
        </nav>
    </header>
)