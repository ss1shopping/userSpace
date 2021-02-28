import React, { useEffect } from "react";
import "../scss/app.scss"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux"

import Dashboard from "../../Components/LandingPage/dashboard/dashboard"
import Header from "../../Components/header/header";
import Footer from "../../Components/footer/footer";
import LandingPage from "../../Components/LandingPage/LandingPage";
import PrivateRouter from "./PrivateRouter";
import Login from "../../Components/login/login";
import Register from "../../Components/login/regiter";
import ConfirmAccount from "../../Components/login/confirmAccount";
import ConfirmSuccessful from "../../Components/login/confirmSuccess";
import Payment from "../../Components/payment/payment"

import { Upload } from "../../Components/LandingPage/dashboard/upload/upload";
import Item from "../../Components/LandingPage/dashboard/item/item";
import ItemDetail from "../../Components/LandingPage/dashboard/item/itemDetail";
import ListOrder from "../../Components/LandingPage/dashboard/listorder/listorder";
import ListOrderShipping from "../../Components/LandingPage/dashboard/listorder/listorderShipping";
import ListOrderFinishing from "../../Components/LandingPage/dashboard/listorder/listorderFinish";
import History from "../../Components/history/history";
import Homepage from "../../Components/homepage/homepage";
import HeaderLogin from "../../Components/header/headerLogin";
import Shop_page from "../../Components/homepage/shopPage";
import ItemdetailShopPage from "../../Components/homepage/itemdetail/itemdetail";
import { getStorage } from "../../_metronic/utils/utils";
import Checkout from "../../Components/payment/checkout";

import { ForgotPassword } from "../../Components/login/forgotPassword";
import ChangePassword from "../../Components/login/changepassword";
import ChangePasswordSuccesful from "../../Components/login/changePasswordSuccesful";
import SearchPage from "../../Components/SearchPage/SearchPage";
import { Body } from "../../Components/shop/main/body/body"
import { Order } from "../../Components/shop/main/body/order";
import { Delivery } from "../../Components/shop/main/body/delivery";
import { ManageItem } from "../../Components/shop/main/body/item"
import { ChooseCategory } from "../../Components/shop/main/body/addItem/chooseCategory";
// import BlurGlass from "../../Components/LandingPage/dashboard/BlurGlass"
const Routerr = () => {
  let token = getStorage("token");
  const isPending = useSelector(state => state.authReducer.isPending)
  const user = useSelector(state => state.authReducer.user)
  //   setTimeout(() => {
  //     token=getStorage("token")
  //   }, 0);

  useEffect(() => {
    token = getStorage("token")
    console.log(token);
  }, [isPending])

  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={token !== null ? HeaderLogin : Header}></Route>
        <Route path="/users" component={token !== null ? HeaderLogin : Header}></Route>
        <Route path="/shop" component={token !== null ? HeaderLogin : Header}></Route>
        <Route path="/history" component={token !== null ? HeaderLogin : Header}></Route>
        <Route path="/shop/:user" component={HeaderLogin}></Route>
        <Route exact path="/dashboard" component={HeaderLogin}></Route>
        <Route path="/dashboard" component={HeaderLogin}></Route> */}
        {/* <Header></Header> */}
      </Switch>

      <Switch>
        {/* <Route exact path="/" component={LandingPage}></Route> */}
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/shop" component={Shop_page}></Route>
        <Route exact path="/shop/:user" component={Shop_page}></Route>
        <Route path="/search" component={SearchPage}></Route>
        {/* <Route exact path="/blur" component={BlurGlass}></Route> */}
        {/* <Redirect  from={"/profile"} exact={true} to={"/SignIn"}/> */}
        <Route exact path="/users/history" component={History}></Route>
        {/* <Route exact path="/banhang" component={Body}></Route> */}
        <Route exact path="/banhang/order" component={Order}></Route>
        <Route exact path="/banhang/item" component={ManageItem}></Route>
        <Route exact path="/banhang/item/choose-category" component={ChooseCategory}></Route>
        <Route exact path="/banhang/delivery" component={Delivery}></Route>
        <Route exact path="/shop/item/:name" component={ItemdetailShopPage}></Route>
        <Route exact path="/users/login" component={Login}></Route>
        <Route exact path='/users/register' component={Register} />
        <Route exact path="/users/cart" component={Payment}></Route>
        <Route exact path="/users/cart/check-out" component={Checkout}></Route>
        <Route exact path="/confirm-account" component={ConfirmAccount}></Route>
        <Route exact path="/users/forgotpassword" component={ForgotPassword}></Route>
        <Route exact path="/users/login/forgotpassword/verify/:token" component={ChangePassword}></Route>
        <Route exact path="/users/login/forgotpassword/confirm" component={ConfirmAccount}></Route>
        <Route exact path="/users/login/change-password" component={ChangePasswordSuccesful}></Route>
        <PrivateRouter exact path="/dashboard/list-order" component={ListOrder}></PrivateRouter>
        <PrivateRouter exact path="/dashboard/list-order-shipping" component={ListOrderShipping}></PrivateRouter>
        <PrivateRouter exact path="/dashboard/list-order-finish" component={ListOrderFinishing}></PrivateRouter>

        <Route exact path="/users/login/:token" component={ConfirmSuccessful}></Route>
        <PrivateRouter exact path="/dashboard" component={Dashboard}></PrivateRouter>
        <PrivateRouter exact path="/dashboard/item" component={Item}></PrivateRouter>
        <PrivateRouter exact path="/dashboard/item/:id" component={ItemDetail}></PrivateRouter>
        <PrivateRouter exact path="/dashboard/upload" component={Upload}></PrivateRouter>
      </Switch>
      <Footer></Footer>
    </Router>
  );
};

export default Routerr;