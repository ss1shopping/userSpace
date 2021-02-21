import React from 'react'
import Header from "../header/header"
import Footer from "../footer/footer"
const DefaultLayoutLayout = (props) => {
  return (
    <div className="default__layout">
      <Headers></Headers>
      {props.children}
    </div>
  )
}
export default DefaultLayoutLayout;
