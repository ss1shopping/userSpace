import React from 'react'
import { Header } from '../header/header'
import { Navbar } from "../navbar/navbar"
export const DefaultLayout = (props) => {
  return (
    <div>
      <Header></Header>
      <div className="mainshopowner">
        <div className="mainshopowner--navbar">
          <Navbar></Navbar>

        </div>
        <div className="mainshopowner--body">
          {props.children}

        </div>
      </div>
    </div>
  )
}
