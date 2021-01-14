import React, { Component } from 'react';
import Menu from '../svg/bars-solid.svg';
import Close from '../svg/times-solid.svg';
import CartIcon from '../svg/shopping-cart-solid.svg';
import './Header.scss';
import { Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="menu">
          <img src={Menu} alt="Menu" />
        </div>
        <div className="logo">
          <h1>
            <Link to="/">Nike</Link>
          </h1>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li className="close">
              <img src={Close} alt="Close" />
            </li>
          </ul>
          <div className="nav-cart">
            <span>0</span>
            <Link to="/cart" >
              <img src={CartIcon} alt="Cart" />
            </Link>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
