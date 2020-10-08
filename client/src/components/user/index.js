import React, { Component } from "react";
import LayoutAdmin from "../../Hoc/adminLayout";
import PurchaseHistory from "./puchase_history";
import { Link, withRouter } from "react-router-dom";
import MyButton from "../utils/button";
import { UserLogout } from "../../actions/user_actions";
import { connect } from "react-redux";

class Dashboard extends Component {
  logoutHandler = () => {
    this.props.dispatch(UserLogout()).then((response) => {
      if (response.payload.success) {
        this.props.history.push("/");
      }
    });
  };
  render() {
    const user = this.props.user.userData;

    return (
      <LayoutAdmin>
        {/* {!user.userData.isAdmin ? ( */}
        <div>
          <div className="user_nfo_panel">
            <h3>USER INFORMATION</h3>
            <div>
              <span>
                {user.name} {user.lastname}
              </span>
              <span>{user.email}</span>
            </div>
            <MyButton type="default" title="Edit account" linkTo="/user/edit" />
            {/* <Link to="/user/edit">Edit Account</Link> */}
          </div>
          {!user.isAdmin && (
            <div className="user_nfo_panel">
              <h3>PURCHASE HISTORY</h3>
              <PurchaseHistory products={user.history} />
            </div>
          )}
          <div className="user_left_nav mobile">
            {user.isAdmin ? (
              <div className="links">
                <h3>Admin</h3>
                <Link to="/user">Site info</Link>
                <Link to="/admin/products/manage">Manage Products</Link>
                <Link to="/admin/products/add">Add Products</Link>
                <Link to="/admin/brands/add">Add Brands</Link>
                <Link to="/admin/categories/add">Add Categories</Link>
              </div>
            ) : null}{" "}
          </div>
          <button onClick={() => this.logoutHandler()}>Log Out</button>
        </div>
        {/* ) : (
        <div className="user_nfo_panel">
          <h3>DASHBOARD</h3>
        </div>
      )} */}
      </LayoutAdmin>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(withRouter(Dashboard));
