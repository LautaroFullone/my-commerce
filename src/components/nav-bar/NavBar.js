import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';


function NavBar() {
    return (
        <header className="nav-grid">
            <div className="logo">
                <a href="/" className="title-logo" >GHOST SHOES</a>
            </div>

            <div className="items">
                <div className="item">
                    <a href="/" className="link-item" >Basketball</a>
                </div>

                <div className="item">
                    <a href="/" className="link-item">Soccer</a>
                </div>

                <div className="item">
                    <a href="/" className="link-item">Paddle</a>
                </div>

            </div>

            <div className="actions">
                <CartWidget onClick={handleCartClick} productsCount={4} />
            </div>

        </header>
    );
}

const handleCartClick = (e) => {
    e.preventDefault()
    console.log('cart log');
}

export default NavBar;