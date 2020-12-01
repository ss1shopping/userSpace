import React from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { RiDashboardLine,RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineCloudUpload ,AiFillSetting,AiFillCaretDown} from "react-icons/ai";
import {IoIosSearch} from "react-icons/io"
import { FcAbout } from "react-icons/fc";
import { GrStatusCriticalSmall} from "react-icons/gr"
import {FaList} from "react-icons/fa"
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
      <Link to="/dashboard"><RiDashboardLine/>            <span>  Dashboard</span></Link>
      <Link to="/dashboard/item"><AiOutlineCloudUpload/>  <span>  Item</span></Link>
      <Link to="/dashboard/upload"><AiOutlineCloudUpload/><span>  Upload</span></Link>
      <Link to="/dashboard/list-order"><FaList/>          <span>  List Order Pending</span></Link>
      <Link to="/dashboard/list-order-shipping"><FaList/> <span>List Order Shipping</span></Link>
      <Link to="/dashboard/list-order-finish"><FaList/> <span>List Order Finish</span></Link>
      <Link to="/"><AiFillSetting/><span>Settings</span></Link>
    </div>
   </div>
        </>
    )
}
export default NavbarCustom;
