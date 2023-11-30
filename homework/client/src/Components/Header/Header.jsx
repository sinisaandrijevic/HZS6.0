import { NavLink } from 'react-router-dom';
import './Header.css';

import Lottie from 'lottie-react'
import animation from './animation1.json'

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <Lottie animationData={animation} />
            </div>
            <div className='links'>
                <NavLink to='/' activeClassName='active'>HOME</NavLink>
                <NavLink to='/about' activeClassName='active'>ABOUT</NavLink>
                <NavLink to='/contact' activeClassName='active'>CONTACT</NavLink>
                <NavLink to='/account' activeClassName='active'>LOGOUT</NavLink>
            </div>
        </div>
    );
}

export default Header;
