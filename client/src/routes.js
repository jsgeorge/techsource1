import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./Hoc/layout";
import Auth from "./Hoc/auth";

import Home from "./components/home";
import Products from "./components/products";
import Phones from "./components/phones";
import Product from "./components/products/product";
import Tablets from "./components/tablets";
import Cart from "./components/cart";
import LoginRegister from "./components/auth";
import Register from "./components/auth/register";
import EditAccount from "./components/user/edit_account";

import Dashboard from "./components/user";
import AddProduct from "./components/user/admin/addProduct";
import EditProduct from "./components/user/admin/editProduct";
import AddBrand from "./components/user/admin/addBrand";
import AddCategory from "./components/user/admin/addCategory";

import ManageProducts from "./components/user/admin/products";
import AdminProduct from "./components/user/admin/product";
import AdminRegister from "./components/auth/adminReg";
import AdminLogin from "./components/auth/adminLogin";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Auth(Home, null)} />
        <Route path="/shop/phones" exact component={Auth(Phones, null)} />
        <Route path="/shop/tablets" exact component={Auth(Tablets, null)} />
        <Route path="/shop/products" exact component={Auth(Products, null)} />
        <Route
          path="/shop/products/:name/:id"
          exact
          component={Auth(Product, null)}
        />
        <Route path="/shop/cart" exact component={Auth(Cart, true)} />
        <Route path="/login" exact component={Auth(LoginRegister, false)} />
        <Route path="/register" exact component={Auth(Register, false)} />
        <Route path="/admin/login" exact component={Auth(AdminLogin, false)} />
        <Route
          path="/admin/register"
          exact
          component={Auth(AdminRegister, false)}
        />

        <Route path="/user/edit" exact component={Auth(EditAccount, true)} />
        <Route
          path="/admin/products/add"
          exact
          component={Auth(AddProduct, true)}
        />
        <Route
          path="/admin/products/:id/edit"
          exact
          component={Auth(EditProduct, true)}
        />
        <Route path="/user/dashboard" exact component={Auth(Dashboard, true)} />
        <Route
          path="/admin/products/add"
          exact
          component={Auth(AddProduct, true)}
        />
        <Route
          path="/admin/brands/add"
          exact
          component={Auth(AddBrand, true)}
        />
        <Route
          path="/admin/categories/add"
          exact
          component={Auth(AddCategory, true)}
        />
        <Route
          path="/admin/products/manage"
          exact
          component={Auth(ManageProducts, true)}
        />
        <Route
          path="/admin/products/:id"
          exact
          component={Auth(AdminProduct, true)}
        />
      </Switch>
    </Layout>
  );
};

export default Routes;
