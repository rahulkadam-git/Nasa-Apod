import React from 'react'
import {Link} from 'react-router-dom';
const NavBar = () => {
    return (
        <div className='navBar-container'>
            <ul>
                <Link className='link-1' to='/'>Home</Link>
                <Link className='link-2' to='/NasaPhoto'>The Photo Of The Day</Link>
            </ul>
        </div>
    )
}

export default NavBar;