import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/SYNAMATIC.png';

const Navbar = () => {
    //Mobile View
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    //Change color on scroll
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 10) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    window.addEventListener('scroll', changeColor);

    //Close Mobile View
    const closeMenu = () => setClick(false);

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <nav className="navbar">
                <Link to="/" className="logo">
                    <img src={logo} alt="logo" />
                </Link>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <div className="nav-menu-2">
                        <Link to="/categories" onClick={closeMenu} className="nav-item">
                            Categories
                        </Link>
                        <Link to="/favorites" onClick={closeMenu} className="nav-item">
                            Favorites
                        </Link>
                    </div>
                </ul>
                <div className="nav-end">
                    <form className="input_container">
                        <input type="text" placeholder="Search"></input>
                        <Link to="/search">
                            <i class="fas fa-search"></i>
                        </Link>
                    </form>
                    <div className="hamburger" onClick={handleClick}>
                        {click ? (
                            <FaTimes size={30} style={{ color: '#ffffff' }} />
                        ) : (
                            <FaBars size={30} style={{ color: '#ffffff' }} />
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
