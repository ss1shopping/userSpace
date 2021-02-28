import React from 'react'
import { Header } from '../../header/header'
import { Navbar } from "../../navbar/navbar"
export const DefaultLayout2 = (props) => {
  return (
    <div>
      <Header></Header>
      <div className="mainshopadd">
        <div className="mainshopadd--wrapper">

          {props.children}
        </div>

        {/* <div className="mainshopowner--navbar">
          <Navbar></Navbar>

        </div>
        <div className="mainshopowner--body"> */}

        {/* </div> */}
      </div>
    </div>
  )
}
