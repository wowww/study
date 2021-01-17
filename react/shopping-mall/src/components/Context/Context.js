import React, { Component } from 'react';

export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    products: [
      {
        "_id": "1",
        "title": "Nike Shoes 01",
        "src": "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
        "Description": "Nike Shoes 01 입니다.",
        "Content": "Nike Shoes 01 Content",
        "price": 23,
        "colors": ["red", "black", "teal"],
        "count": 1,
      },
      {
        "_id": "2",
        "title": "Nike Shoes 02",
        "src": "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
        "Description": "Nike Shoes 02 입니다.",
        "Content": "Nike Shoes 02 Content",
        "price": 19,
        "colors": ["red", "teal", "blue"],
        "count": 2,
      },
      {
        "_id": "3",
        "title": "Nike Shoes 03",
        "src": "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
        "Description": "Nike Shoes 03 입니다.",
        "Content": "Nike Shoes 03 Content",
        "price": 50,
        "colors": ["pink", "black", "teal"],
        "count": 3,
      },
      {
        "_id": "4",
        "title": "Nike Shoes 04",
        "src": "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
        "Description": "Nike Shoes 04 입니다.",
        "Content": "Nike Shoes 04 Content",
        "price": 15,
        "colors": ["gray", "black", "white", "pink"],
        "count": 4,
      },
      {
        "_id": "5",
        "title": "Nike Shoes 05",
        "src": "https://www.upsieutoc.com/images/2020/06/27/img5.jpg",
        "Description": "Nike Shoes 05 입니다.",
        "Content": "Nike Shoes 05 Content",
        "price": 10,
        "colors": ["orange", "black", "green"],
        "count": 5,
      },
      {
        "_id": "6",
        "title": "Nike Shoes 06",
        "src": "https://www.upsieutoc.com/images/2020/06/27/img6.jpg",
        "Description": "Nike Shoes 06 입니다.",
        "Content": "Nike Shoes 06 Content",
        "price": 17,
        "colors": ["white", "black", "teal"],
        "count": 6,
      },
    ],
    cart : [],
    total: 0,
  };

  addCart = id => {
    const { products, cart } = this.state;
    const check = cart.every(item => {
      return item._id !== id
    })
    if(check) {
      const data = products.filter(product => {
        return product._id === id
      })
  
      this.setState({cart: [...cart, ...data]})
    } else {
      alert("The product has been added to cart.")
    }
  }

  reduction = id => {
    const { cart } = this.state;

    cart.forEach(item => {
      if(item._id === id) {
        item.count === 1 ? item.count = 1 : item.count -= 1;
      }
    })
    this.setState({ cart });
    this.getTotal();
  }

  increase = id => {
    const { cart } = this.state;

    cart.forEach(item => {
      if(item._id === id) {
        item.count += 1;
      }
    })
    this.setState({ cart });
    this.getTotal();
  }

  removeProduct = id => {
    if(window.confirm("Do you want to delete this product?")) {
      const { cart } = this.state;
      cart.forEach((item, index) => {
        if(item._id === id) {
          cart.splice(index, 1)
        }
      })
      this.setState({ cart });
      this.getTotal();
    }
  }

  getTotal = () => {
    const { cart } = this.state;
    const res = cart.reduce((prev, item) => {
      return prev + (item.price * item.count);
    }, 0)

    this.setState({ total: res });
  }

  componentDidUpdate() {
    localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
    localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
  }

  componentDidMount() {
    const dataCart = JSON.parse(localStorage.getItem('dataCart'));
    if(dataCart !== null) {
      this.setState({cart: dataCart});
    }

    const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
    if(dataTotal !== null) {
      this.setState({total: dataTotal});
    }
  }

  render() {
    const { products, cart, total } = this.state;
    const { addCart, reduction, increase, removeProduct, getTotal } = this;
    return (
      <DataContext.Provider value={{products, addCart, cart, reduction, increase, removeProduct, total, getTotal}}>
        {this.props.children}
      </DataContext.Provider>
    )
  }
}

// export default Context
