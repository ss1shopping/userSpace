import React, { useEffect } from "react";
import "../scss/app.scss"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux"

import Footer from "../../Components/footer/footer";

import PrivateRouter from "./PrivateRouter";
import Login from "../../Components/login/login";
import Register from "../../Components/login/regiter";
import ConfirmAccount from "../../Components/login/confirmAccount";
import ConfirmSuccessful from "../../Components/login/confirmSuccess";

import History from "../../Components/history/history";
import Homepage from "../../Components/homepage/homepage";

import { getStorage } from "../../_metronic/utils/utils";
// import Checkout from "../../Components/payment/checkout";

import { ForgotPassword } from "../../Components/login/forgotPassword";
import ChangePassword from "../../Components/login/changepassword";
import ChangePasswordSuccesful from "../../Components/login/changePasswordSuccesful";
import SearchPage from "../../Components/SearchPage/SearchPage";

import { Order } from "../../Components/shop/main/body/order";
import { Delivery } from "../../Components/shop/main/body/delivery";
import { ManageItem } from "../../Components/shop/main/body/item"
import { ChooseCategory } from "../../Components/shop/main/body/addItem/chooseCategory";
import { AddProduct } from "../../Components/shop/main/body/addItem/addProduct";
import { ShopProfile } from "../../Components/shop/main/body/shopProfile"
import Detaiitem from "../../Components/detaiItem/detaiItem.page"
import Cart from "../../Components/cart/cart"
import Checkout from "../../Components/checkout/checkout.page"
import { UserProfile } from "../../Components/user/userProfile";
import { Address } from "../../Components/user/address";
import { UpdateItem } from "../../Components/shop/main/body/updateItem";
import {Banner} from "../../Components/shop/banner/index"
import  CreateCategory  from "../../Components/shop/category/create";
import { isMobile } from 'react-device-detect';
import Category from "../../Components/shop/category/index";
const Routerr = () => {
  let token = getStorage("token");
  const isPending = useSelector(state => state.authReducer.isPending)
  // const user = useSelector(state => state.authReducer.user)

  useEffect(() => {
    token = getStorage("token")

  }, [isPending])

  return (
    <Router>
		{
			isMobile?
	<Switch>
  		<Route exact path="/" component={Homepage}></Route>
        <Route path="/search" component={SearchPage}></Route>
        <Route exact path="/history" component={History}></Route>
        <Route exact path="/banhang/order" component={Order}></Route>
        <Route exact path="/banhang/item" component={ManageItem}></Route>
        <Route exact path="/banhang/choose-category" component={ChooseCategory}></Route>
        <Route exact path="/banhang/choose-category/:id" component={ChooseCategory}></Route>
        <Route exact path="/banhang/add-product" component={AddProduct}></Route>
        <Route exact path="/banhang/shop-profile" component={ShopProfile}></Route>
        <Route exact path="/banhang/update/item/:id" component={UpdateItem}></Route>
        <Route exact path="/banhang/delivery" component={Delivery}></Route>
        <Route exact path='/banhang/banner' component={Banner}></Route>
        {/* <Route exact path="/shop/item/:name" component={ItemdetailShopPage}></Route> */}
        <Route exact path="/users/login" component={Login}></Route>
        <Route exact path='/users/register' component={Register} />
        <Route exact path='/users/profile' component={UserProfile} />
        <Route exact path='/users/address' component={Address} />

        <Route exact path='/detail/:item' component={Detaiitem} />

        <Route exact path="/cart" component={Cart}></Route>
        <Route exact path="/checkout" component={Checkout}></Route>

        {/* <Route exact path="/users/cart/check-out" component={Checkout}></Route> */}
        <Route exact path="/confirm-account" component={ConfirmAccount}></Route>
        <Route exact path="/users/forgotpassword" component={ForgotPassword}></Route>
        <Route exact path="/users/login/forgotpassword/verify/:token" component={ChangePassword}></Route>
        <Route exact path="/users/login/forgotpassword/confirm" component={ConfirmAccount}></Route>
        <Route exact path="/users/login/change-password" component={ChangePasswordSuccesful}></Route>
        {/* <PrivateRouter exact path="/dashboard/list-order" component={ListOrder}></PrivateRouter>
        <PrivateRouter exact path="/dashboard/list-order-shipping" component={ListOrderShipping}></PrivateRouter>
        <PrivateRouter exact path="/dashboard/list-order-finish" component={ListOrderFinishing}></PrivateRouter> */}

        <Route exact path="/users/login/:token" component={ConfirmSuccessful}></Route>
	</Switch>
			:


		<Switch>
			<Route exact path="/" component={Homepage}></Route>
			<Route path="/search" component={SearchPage}></Route>
			<Route exact path="/history" component={History}></Route>
			<Route exact path="/banhang/order" component={Order}></Route>
			<Route exact path="/banhang/item" component={ManageItem}></Route>
			<Route exact path="/banhang/choose-category" component={ChooseCategory}></Route>
			<Route exact path="/banhang/choose-category/:id" component={ChooseCategory}></Route>
			<Route exact path="/banhang/add-product" component={AddProduct}></Route>
			<Route exact path="/banhang/shop-profile" component={ShopProfile}></Route>
			<Route exact path="/banhang/update/item/:id" component={UpdateItem}></Route>
			<Route exact path="/banhang/delivery" component={Delivery}></Route>
      <Route exact path='/banhang/banner' component={Banner}></Route>
      <Route exact path='/banhang/category/create' component={CreateCategory}></Route>
      <Route exact path='/banhang/category' component={Category}></Route>
			{/* <Route exact path="/shop/item/:name" component={ItemdetailShopPage}></Route> */}
			<Route exact path="/users/login" component={Login}></Route>
			<Route exact path='/users/register' component={Register} />
			<Route exact path='/users/profile' component={UserProfile} />
			<Route exact path='/users/address' component={Address} />
	
			<Route exact path='/detail/:item' component={Detaiitem} />
	
			<Route exact path="/cart" component={Cart}></Route>
			<Route exact path="/checkout" component={Checkout}></Route>
	
			{/* <Route exact path="/users/cart/check-out" component={Checkout}></Route> */}
			<Route exact path="/confirm-account" component={ConfirmAccount}></Route>
			<Route exact path="/users/forgotpassword" component={ForgotPassword}></Route>
			<Route exact path="/users/login/forgotpassword/verify/:token" component={ChangePassword}></Route>
			<Route exact path="/users/login/forgotpassword/confirm" component={ConfirmAccount}></Route>
			<Route exact path="/users/login/change-password" component={ChangePasswordSuccesful}></Route>
			{/* <PrivateRouter exact path="/dashboard/list-order" component={ListOrder}></PrivateRouter>
			<PrivateRouter exact path="/dashboard/list-order-shipping" component={ListOrderShipping}></PrivateRouter>
			<PrivateRouter exact path="/dashboard/list-order-finish" component={ListOrderFinishing}></PrivateRouter> */}
	
			<Route exact path="/users/login/:token" component={ConfirmSuccessful}></Route>
		   
		</Switch>
		}
     
      <Footer></Footer>
    </Router>
  );
};

export default Routerr;