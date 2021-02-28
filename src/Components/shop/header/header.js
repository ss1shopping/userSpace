import React from 'react'
import avatar from "../../../app/scss/avatar.png"
import { AiFillProfile } from "react-icons/ai"
import { IoIosLogOut } from "react-icons/io"
import { Link } from "react-router-dom"
import { BsFillGrid3X3GapFill } from "react-icons/bs"
import { RiNotification2Line } from "react-icons/ri"
export const Header = () => {
  return (
    <div className="shopowner">
      <div className="shopowner--left">
        <div className="box--left">
          <div className="shopowner--left--logo" id="logo">Picassso</div>
          <div className="shopowner--left--title">Kênh người bán</div>
        </div>
        <div className="box--right">
          <div>
            <img src={avatar} className="box--right--img"></img>
            <span className="box--right--span"> manhtien465</span>
          </div>
          <div className="drop--down">
            <div className="drop--down--link">
              <Link to="/">
                <span><AiFillProfile /></span> <span> Hồ sơ shop </span>
              </Link>
            </div>
            <div className="drop--down--link">
              <a href="/">
                <span><IoIosLogOut /></span> <span> Đăng suất</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="shopowner--right">
        <div className="shopowner--right--grid">
          <div className="grid--icon"><BsFillGrid3X3GapFill /></div>
          <div className="grid--dropdown">

          </div>
        </div>
        <div className="shopowner--right--notification">

          <div className="grid--icon"><RiNotification2Line /></div>
          <div></div>
        </div>
        <div></div>
      </div>
    </div>
  )
}
