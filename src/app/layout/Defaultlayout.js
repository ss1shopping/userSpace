import React, { useState, useEffect } from 'react';
import '../../app/scss/app.scss'

import Header from "../../Components/header/header";
import Footer from '../../Components/footer/footer';
import { BrowserRouter as Router } from "react-router-dom";
import { getStorage } from '../../_metronic';
import HeaderLogin from '../../Components/header/headerLogin';
function DefaultLayout(props) {
  const [status, setstatus] = useState(false)
  useEffect(() => {
    if (getStorage("token") === "" || null || undefined) {
      console.log("run");
      setstatus(false)
    } else {
      setstatus(true)
    }

  }, [])

  return (
    <>
      {getStorage("token") === "" || getStorage("token") === null || getStorage("token") === undefined ? <Header></Header> : <HeaderLogin></HeaderLogin>}
      {props.children}
    </>

  );
}
export default DefaultLayout;
