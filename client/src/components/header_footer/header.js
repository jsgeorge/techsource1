import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faBars from "@fortawesome/fontawesome-free-solid/faBars";
import faShoppingCart from "@fortawesome/fontawesome-free-solid/faShoppingCart";
import faUser from "@fortawesome/fontawesome-free-solid/faUser";
import faSearch from "@fortawesome/fontawesome-free-solid/faSearch";

import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

class Header extends Component {
  state = {
    open: false,
    adminPages: [
      {
        name: "Home",
        linkTo: "/",
        public: true,
      },
    ],
    pagelinks: [
      {
        name: "Home",
        linkTo: "/",
        public: true,
      },
      {
        name: "Shop",
        linkTo: "/shop/products",
        public: true,
      },
      {
        name: "Specials",
        linkTo: "/shop/products",
        public: true,
      },
      {
        name: "New ",
        linkTo: "/shop/products",
        public: true,
      },
      {
        name: "Contacts",
        linkTo: "/shop/products",
        public: true,
      },
    ],
    userlinks: [
      {
        name: "Cart",
        linkTo: "/shop/cart",
        public: false,
      },
      {
        name: "Account",
        linkTo: "/user/dashboard",
        public: false,
      },
      {
        name: "Log in",
        linkTo: "/login",
        public: true,
      },
    ],
    adminlinks: [
      {
        name: "Account",
        linkTo: "/user/dashboard",
        public: false,
      },
      {
        name: "Log in",
        linkTo: "/login",
        public: true,
      },
    ],
  };

  componentDidMount() {
    if (this.props.initState) {
      this.setState({ open: this.props.initState });
    }
  }
  handleClick = () => {
    this.setState({ open: !this.state.open });
  };
  handleBars = () =>
    this.state.open ? (
      <FontAwesomeIcon icon={faBars} className="icon" />
    ) : (
      <FontAwesomeIcon icon={faBars} className="icon" />
    );

  desktopSearch = () => <FontAwesomeIcon icon={faSearch} className="icon" />;

  defaultLink = (item, i) => (
    <Link to={item.linkTo} key={i}>
      {item.name}
    </Link>
  );

  mobileLink = (item, i) => (
    <ListItem
      key={i}
      style={{
        background: "transparent",
        color: "#fff",
        padding: "15px 0",
        borderBottom: "1px solid #555",
      }}
    >
      <Link to={item.linkTo} key={i}>
        {item.name}
      </Link>
    </ListItem>
  );

  cartLink = (item, i) => {
    const user = this.props.user.userData;

    return (
      <div className="cart_link" key={i}>
        <Link to={item.linkTo}>
          <span>{user.cart ? user.cart.length : 0}</span>
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
      </div>
    );
  };
  accountLink = (item, i) => {
    const user = this.props.user.userData;

    return (
      <div className="account_link" key={i}>
        <Link to={item.linkTo}>
          <span>
            <FontAwesomeIcon icon={faUser} />
          </span>
        </Link>
      </div>
    );
  };
  showUserLinks = (type, isMobile) => {
    const user = this.props.user.userData;

    let list = [];

    type.forEach((item) => {
      if (user && user.isAuth) {
        if (!item.public) {
          list.push(item);
        }
      } else {
        if (item.public) {
          list.push(item);
        }
      }
    });

    return list.map((item, i) => {
      if (item.name === "Cart") {
        return this.cartLink(item, i);
      } else if (item.name === "Account") {
        return this.accountLink(item, i);
      } else if (!isMobile) return this.defaultLink(item, i);
      else return this.mobileLink(item, i);
    });
  };
  showPageLinks = (type, isMobile) => {
    let list = [];

    type.forEach((item) => {
      list.push(item);
    });

    return list.map((item, i) => {
      //if (item.name !== "My Cart") {
      if (!isMobile) return this.defaultLink(item, i);
      else return this.mobileLink(item, i);
      // } else {
      //   return this.cartLink(item, i);
      // }
    });
  };
  showAdminLinks = (type, isMobile) => {
    const user = this.props.user.userData;

    let list = [];

    type.forEach((item) => {
      if (user && user.isAuth) {
        if (!item.public) {
          list.push(item);
        }
      } else {
        if (item.public) {
          list.push(item);
        }
      }
    });

    return list.map((item, i) => {
      if (!isMobile) return this.defaultLink(item, i);
      else return this.mobileLink(item, i);
    });
  };
  render() {
    const user = this.props.user.userData;

    return (
      <React.Fragment>
        {user && user.isAdmin ? (
          <header>
            <AppBar
              position="fixed"
              style={{
                backgroundColor: "#111",
                boxShadow: "none",
                padding: "10px 0px",
                borderBottom: "1px solid #aaa",
                color: "#fff",
              }}
            >
              <Toolbar>
                <div className="container">
                  <div className="left">
                    <div className="logo">
                      <Link to="/">
                        <span>TECHSOURCE Admin</span>
                      </Link>
                    </div>
                  </div>{" "}
                  <div className="right">
                    <div className="top userLinks desktop">
                      {this.showAdminLinks(this.state.adminlinks, false)}
                    </div>

                    <div className="bottom  pageLinks">
                      {this.showPageLinks(this.state.adminPages)}
                    </div>
                  </div>
                  <div className="mobileNav mobile">
                    <List>
                      <ListItem onClick={this.handleClick}>
                        {this.handleBars()}
                      </ListItem>
                      <Collapse
                        in={this.state.open}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List component="div">
                          {this.showPageLinks(this.state.pagelinks, true)}
                        </List>
                      </Collapse>
                    </List>
                  </div>
                </div>
              </Toolbar>
              {/* <div className="mobileSrch tablet mobile">
                <form onSubmit={this.handleMobileSrch}>
                  <input
                    type="text"
                    ref="mobileSrch"
                    placeholder="mobile Search products"
                  />
                  <button type="submit">{this.desktopSearch()}</button>
                </form>
              </div> */}
            </AppBar>
          </header>
        ) : (
          <header>
            <AppBar
              position="fixed"
              style={{
                backgroundColor: "#111",
                boxShadow: "none",
                padding: "10px 0px",
                borderBottom: "1px solid #aaa",
                color: "#fff",
              }}
            >
              <Toolbar>
                <div className="container">
                  <div className="left">
                    <div className="logo">
                      <Link to="/">
                        <span>TECHSOURCE</span>
                      </Link>
                    </div>
                  </div>{" "}
                  <div className="desktopSrch desktop">
                    <form onSubmit={this.handleDesktopSrch}>
                      <input
                        type="text"
                        ref="desktopSrch"
                        placeholder="desktop Search products"
                      />
                      <button type="submit">{this.desktopSearch()}</button>
                    </form>
                  </div>
                  <div className="right">
                    <div className="top userLinks desktop">
                      {this.showUserLinks(this.state.userlinks, false)}
                    </div>

                    <div className="bottom  pageLinks">
                      {this.showPageLinks(this.state.pagelinks)}
                    </div>
                  </div>
                  <div className="mobileNav mobile">
                    <List>
                      <ListItem onClick={this.handleClick}>
                        {this.handleBars()}
                      </ListItem>
                      <Collapse
                        in={this.state.open}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List component="div">
                          {this.showPageLinks(this.state.pagelinks, true)}
                        </List>
                      </Collapse>
                    </List>
                  </div>
                </div>
              </Toolbar>
              <div className="mobileSrch tablet mobile">
                <form onSubmit={this.handleMobileSrch}>
                  <input
                    type="text"
                    ref="mobileSrch"
                    placeholder="mobile Search products"
                  />
                  <button type="submit">{this.desktopSearch()}</button>
                </form>
              </div>
            </AppBar>
          </header>
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(withRouter(Header));
