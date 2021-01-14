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
    ]
  }

  render() {
    const { products } = this.state;
    return (
      <DataContext.Provider value={{products}}>
        {this.props.children}
      </DataContext.Provider>
    )
  }
}

// export default Context