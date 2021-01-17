import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Products from './Products/Products';
import Details from './Details/Details';
import Cart from './Cart/Cart';
import './Section.scss';

export class Section extends Component {
  render() {
    return (
      <section>
        <Route path="/product" component={Products} exact />
        <Route path="/product/:id" component={Details} exact />
        <Route path="/cart" component={Cart} exact />
      </section>
    )
  }
}

export default Section
