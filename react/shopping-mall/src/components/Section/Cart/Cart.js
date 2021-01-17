import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../Context/Context';
import Colors from '../Colors/Colors';
import '../Details/Details.scss';
import './Cart.scss';

export class Cart extends Component {
  static contextType = DataContext;

  render() {
    const { cart, reduction, increase, removeProduct } = this.context;

    if (cart.length === 0) {
      return (
        <h2>Nothings Product</h2>
      )
    } else {
      return (
        <>
          {
            cart.map(item => (
              <div className="details cart" key={item._id}>
                <img src={item.src} alt="" />
                <div className="box">
                  <div className="row">
                    <h2>{item.title}</h2>
                    <span>${item.price}</span>
                  </div>
                  <Colors colors={item.colors} />
                  <p>{item.Description}</p>
                  <p>{item.Content}</p>
                  <div className="amount">
                    <button className="count" onClick={() => reduction(item._id)}> - </button>
                    <span>{item.count}</span>
                    <button className="count" onClick={() => increase(item._id)}> + </button>
                  </div>
                </div>
                <div className="delete" onClick={() => removeProduct(item._id)}>
                  X
                </div>
              </div>
            ))
          }
          <div className="total">
            <Link to="/payment">Payment</Link>
            <h3>Total: 0</h3>
          </div>
        </>
      )
    }
  }
}

export default Cart
