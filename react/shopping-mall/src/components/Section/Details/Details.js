import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../Context/Context';
import Colors from '../Colors/Colors';
import './Details.scss';

export class Details extends Component {
  static contextType = DataContext;
  state = {
    product: []
  }

  getProduct = () => {
    if(this.props.match.params.id) {
      const res = this.context.products;
      const data = res.filter(item => {
        return item._id === this.props.match.params.id
      })
      this.setState({product: data})
    }
  }

  componentDidMount() {
    this.getProduct();
  }

  render() {
    const { product } = this.state;
    return (
      <>
        {
          product.map(item => (
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

export default Details