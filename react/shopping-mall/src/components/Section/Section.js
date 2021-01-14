import React, { Component } from 'react';
import Products from './Products/Products';
import Details from './Details/Details';
import { Route, Router } from 'react-router-dom';
import './Section.scss';

export class Section extends Component {
  render() {
    return (
      <section>
        <Route path="/product" component={Products} exact />
        <Route path="/product/:id" component={Details} />
      </section>
    )
  }
}

export default Section
