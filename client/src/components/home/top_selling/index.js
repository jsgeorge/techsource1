import React, { Component } from "react";
import axios from "axios";

class TopSelling extends Component {
  state = {
    products: []
  };
  componentDidMount() {
    const request = axios
      .get("/api/products/articles")
      .then(response => response.data);
    this.setState({
      products: request
    });
  }

  showProducts = () =>
    this.state.products
      ? this.state.products.map((product, i) => (
          <div className="card_item_wrapper">
            <div className="image" />
            <div className="tags">
              <tag className="brand">{product.brand}</tag>
              <tag className="name">{product.name}</tag>

              <tag className="price">{product.price}</tag>
            </div>
            <div className="actions">
              <div className="button_wrapp">
                <button>View More</button>
              </div>
            </div>
          </div>
        ))
      : null;

  // const showProducts = () =>
  //   props.List
  //     ? props.list.map((product, i) => (
  //         <div className="card_item_wrapper">
  //           card
  //           <div className="image" />
  //           <div className="tags">
  //             <tag className="brand">{product.brand}</tag>
  //             <tag className="name">{product.name}</tag>

  //             <tag className="price">{product.price}</tag>
  //           </div>
  //           <div className="actions">
  //             <div className="button_wrapp">
  //               <button>View More</button>
  //             </div>
  //           </div>
  //         </div>
  //       ))
  //     : null;
  render() {
    return (
      <div className="container">
        <div className="card_block">
          <h3 className="title">Top Selling</h3>

          <div className="card_items_wrapper">
            {this.showProducts()}
            {/* <div className="card_item_wrapper">
         <div className="image"
         style={{background: `url(${imgLoc}/${category}/${product}/${imgPhone})`}}
         />
         <div className="tags">
         <tag className="brand">Brand</tag>
         <tag className="name">Product</tag>
      
        <tag className="price">Reg $0.00</tag>
         <tag className="price">Now $0.00</tag>
         </div>
         <div className="actions">
          <div className="button_wrapp">
            <button>View More</button>
          </div>
         </div>
       </div>

<div className="card_item_wrapper">
         <div className="image"
         style={{background: `url(${imgLoc}/${category}/${product}/${imgPhone})`}}
         />
         <div className="tags">
         <tag className="brand">Brand</tag>
        <tag className="name">Product</tag>
         
         <tag className="price">Reg $0.00</tag>
         <tag className="price">Now $0.00</tag>
         </div>
         <div className="actions">
          <div className="button_wrapp">
            <button>View More</button>
          </div>
         </div>
       </div>
       
 <div className="card_item_wrapper">
         <div className="image"
         style={{background: `url(${imgLoc}/${category}/${product}/${imgPhone})`}}
         />
         <div className="tags">
         <tag className="brand">Brand</tag>
         <tag className="name">Product</tag>
         
         <tag className="price">Reg $0.00</tag>
         <tag className="price">Now $0.00</tag>
         </div>
         <div className="actions">
          <div className="button_wrapp">
            <button>View More</button>
          </div>
         </div>
       </div>

        <div className="card_item_wrapper">
         <div className="image"
         style={{background: `url(${imgLoc}/${category}/${product}/${imgPhone})`}}
         />
         <div className="tags">
         <tag className="brand">Brand</tag>
         
         <tag className="price">Reg $0.00</tag>
         <tag className="price">Now $0.00</tag>
         </div>
         <div className="actions">
          <div className="button_wrapp">
            <button>View More</button>
          </div>
         </div>
       </div> */}
          </div>
        </div>
      </div>
    );
  }
}
export default TopSelling;
