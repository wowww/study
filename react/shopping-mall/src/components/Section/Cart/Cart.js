import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../Context/Context';
import Colors from '../Colors/Colors';
import '../Details/Details.scss';

export class Cart extends Component {
  static contextType = DataContext;

  render() {
    const { cart } = this.context;

    return (
      <>
        {
          cart.map(item => (
            <div className="details" key={item._id}>
              <img src={item.src} alt="" />
              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>${item.price}</span>
                </div>
                <Colors colors={item.colors} />
                <p>{item.Description}</p>
                <p>{item.Content}</p>
                <Link to="/cart" className="cart">
                  Add to cart
                </Link>
              </div>
            </div>
          ))
        }
      </>
    )
  }
}

export default Cart
