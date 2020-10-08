import React, { Component } from "react";
import { connect } from "react-redux";
import { getBrands } from "../../actions/brand_actions";
import { getCategories, getCategoryId } from "../../actions/category_actions";
import { getProducts } from "../../actions/product_actions";
import ChkBxBlock from "./../utils/chkbx_block";
import LoadMoreCards from "./load_more_cards";
import RadioBlock from "../utils/radbtn_block";

class Tablets extends Component {
  ctgryId = "5c4b41c72fc464438df10603";
  state = {
    grid: "",
    limit: 20,
    skip: 0,
    filters: {
      brand: [],
      category: [this.ctgryId],
      price: []
    }
  };
  ranges = [
    { price: "0 to 100" },
    { price: "100 to 200" },
    { price: "200 to 300" },
    { price: "300 to 500" },
    { price: "500 to 1000" }
  ];
  componentDidMount() {
    this.props.dispatch(getBrands());
    this.props.dispatch(getCategories());

    this.props.dispatch(
      getProducts(this.state.skip, this.state.limit, this.state.filters)
    );
  }

  ctgryFilters = filters => {
    const newFilters = { ...this.state.filters };
    newFilters["category"] = filters;

    this.showFilteredResults(newFilters);

    this.setState({
      filters: newFilters
    });
  };
  handleFilters = (filters, type) => {
    const newFilters = { ...this.state.filters };
    newFilters[type] = filters;

    this.showFilteredResults(newFilters);

    this.setState({
      filters: newFilters
    });
  };

  showFilteredResults = filters => {
    //console.log(filters);
    this.props.dispatch(getProducts(0, this.state.limit, filters)).then(() => {
      this.setState({ skip: 0 });
    });
  };

  render() {
    return (
      <div className="page_wrapper">
        <div className="page_top">
          <div className="container">Browse Tablets</div>
        </div>
        <div className="container">
          <div className="shop_wrapper">
            <div className="left">
              <ChkBxBlock
                initState={true}
                list={this.props.brands.byName}
                title="Brands"
                handleFilters={filters => this.handleFilters(filters, "brand")}
              />
              <ChkBxBlock
                initState={true}
                list={this.props.categories.byName}
                title="Categories"
                handleFilters={filters =>
                  this.handleFilters(filters, "category")
                }
              />
              <RadioBlock
                initState={true}
                title="Price Range"
                handleFilters={filters => this.handleFilters(filters, "price")}
              />
            </div>
            <div className="right">
              Displying
              {this.props.products.toShopSize} products
              <br />
              <LoadMoreCards
                grid={this.state.grid}
                limit={this.state.limit}
                size={this.props.products.toShopSize}
                products={this.props.products.toShop}
                loadMore={() => console.log("load More")}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    brands: state.brands,
    categories: state.categories,
    products: state.products
  };
};
export default connect(mapStateToProps)(Tablets);
