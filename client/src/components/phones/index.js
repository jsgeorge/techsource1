import React, { Component } from "react";
import { connect } from "react-redux";
import { getBrands } from "../../actions/brand_actions";
import { getCategories, getCategoryId } from "../../actions/category_actions";
import { getProducts } from "../../actions/product_actions";
import ChkBxBlock from "./../utils/chkbx_block";
import LoadMoreCards from "./load_more_cards";
import RadioBlock from "../utils/radbtn_block";
import { price } from "../utils/fixed_categories";

class Phones extends Component {
  ctgryId = "5c4b41ad2fc464438df10601";
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
  handlePrice = value => {
    const data = this.prices;
    let array = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value, 10)) {
        array = data[key].array;
      }
    }

    return array;
  };
  handleFilters = (filters, type) => {
    const newFilters = { ...this.state.filters };
    newFilters[type] = filters;

    if (type === "price") {
      let priceValues = this.handlePrice(filters);
      newFilters[type] = priceValues;
    }
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

  loadMoreCards = () => {
    let skip = this.state.skip + this.state.limit;
    this.props
      .dispatch(
        getProducts(
          skip,
          this.state.limit,
          this.state.filters,
          this.props.products.toShop
        )
      )
      .then(() => {
        this.state(skip);
      });
  };
  render() {
    return (
      <div className="page_wrapper">
        <div className="page_top">
          <div className="container">Browse Phones</div>
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
                list={price}
                title="Price Range"
                handleFilters={filters => this.handleFilters(filters, "price")}
              />
            </div>
            <div className="right">
              <div>
                <h4>
                  Displaying
                  {this.props.products.toShopSize} products
                </h4>
              </div>
              <LoadMoreCards
                grid={this.state.grid}
                limit={this.state.limit}
                size={this.props.products.toShopSize}
                products={this.props.products.toShop}
                loadMore={() => this.loadMoreCards()}
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
export default connect(mapStateToProps)(Phones);
