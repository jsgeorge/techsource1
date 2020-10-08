import React, { Component } from "react";
import Carousel from "./carousel";
//import TopSelling from "./top_selling";
import Promotions from "./promotions";
//import NewArrivals from "./new_arrivals";
import CardBlock from "./../utils/card_block";

import { connect } from "react-redux";
import {
  getAllProducts,
  getProductsBySell,
  getProductsByArrival,
} from "../../actions/product_actions";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getProductsBySell());

    this.props.dispatch(getProductsByArrival());
  }
  render() {
    return (
      <div className="page_wrapper">
        <Carousel />

        <CardBlock list={this.props.products.bySell} title="Top Sellers" />

        <CardBlock list={this.props.products.byArrival} title="New Arrivals" />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
export default connect(mapStateToProps)(Home);
