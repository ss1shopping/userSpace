import React, { useRef } from 'react';
import '../../app/scss/app.scss'

import Header from "../../Components/header/header";
import Footer from '../../Components/footer/footer';
import { BrowserRouter as Router } from "react-router-dom";
function DefaultLayout(props) {


  return (
    <>
      <Header></Header>
      {props.children}
    </>

  );
}
export default DefaultLayout;
