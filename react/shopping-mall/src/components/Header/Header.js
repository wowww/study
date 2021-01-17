import React, { Component } from 'react';
import Menu from '../svg/bars-solid.svg';
import Close from '../svg/times-solid.svg';
import CartIcon from '../svg/shopping-cart-solid.svg';
import './Header.scss';
import { Link } from 'react-router-dom';
import { DataContext } from '../Context/Context';

export class Header extends Component {
  static contextType = DataContext;

  state = {
    toggle: false
  }

  menuToggle = () => {
    this.setState({toggle: !this.state.toggle})
  }

  render() {
    const { toggle } = this.state;
    const { cart } = this.context;

    return (
      <header>
        <div className="menu" onClick={this.menuToggle}>
          <img src={Menu} alt="Menu" />
        </div>
        <div className="logo">
          <h1>
            <Link to="/">Nike</Link>
          </h1>
        </div>
        <nav>
          <ul className={toggle ? "toggle" : ""}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login / Register</Link></li>
            <li className="close">
              <img src={Close} alt="Close" onClick={this.menuToggle} />
            </li>
          </ul>
          <div className="nav-cart">
            <span>{cart.length}</span>
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
