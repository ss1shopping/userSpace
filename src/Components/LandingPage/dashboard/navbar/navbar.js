import React from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { RiDashboardLine,RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineCloudUpload ,AiFillSetting,AiFillCaretDown} from "react-icons/ai";
import {IoIosSearch} from "react-icons/io"
import { FcAbout } from "react-icons/fc";
import { GrStatusCriticalSmall} from "react-icons/gr"
import{Link} from "react-router-dom"
const NavbarCustom = () => {
    return (
        <>
             
     <input type="checkbox" id="check"></input>
      
    <div className="sidebar">
        <label for="check">
        <i  id="btn"><FiAlignJustify/></i>
      </label>
       <div className="sidebar-nav">
      <Link to="/"><RiDashboardLine/><span>Dashboard</span></Link>
      <Link to="/dashboard/item"><AiOutlineCloudUpload/><span>Item</span></Link>
      <Link to="/dashboard/upload"><GrStatusCriticalSmall/><span>upload</span></Link>
      <Link to="/dashboard/machinelearning"><RiDeleteBin6Line/><span>Machine learning</span></Link>
      <Link to="/"><FcAbout/><span>About</span></Link>
      <Link to="/"><AiFillSetting/><span>Settings</span></Link>
    </div>
   </div>
        </>
    )
}
export default NavbarCustom;
