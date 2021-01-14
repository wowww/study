import React, { Component } from 'react';
import Menu from '../svg/bars-solid.svg';
import Close from '../svg/times-solid.svg';
import CartIcon from '../svg/shopping-cart-solid.svg';
import '../Header/Header.scss'

export class Header extends Component {
  render() {
    return (
      <div>
        <div className="menu">
          <img src={Menu} alt="Menu" />
        </div>
      </div>
    )
  }
}

export default Header
