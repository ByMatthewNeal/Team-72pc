import React from 'react'
import '../styles/navbar.scss';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <div className='navbar'>
            <ul className='nav-list'>
                <li><Link to='/' className='link'>Home</Link></li>
                <li><Link to='/about' className='link'>About</Link></li>
                <li><Link to='/events' className='link'>Events</Link></li>
                <li><Link to='/news' className='link'>News</Link></li>
                <li><Link to='/team' className='link'>Team</Link></li>
                <li><a href='https://akquire.ca/72pinconnector/' target='blank' className='link'>Merch</a></li>
            </ul>
        </div>
    )
}

export default Navbar