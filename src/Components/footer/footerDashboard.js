import React from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { RiDashboardLine,RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineCloudUpload ,AiFillSetting,AiFillCaretDown} from "react-icons/ai";
import {IoIosSearch} from "react-icons/io"
import { FcAbout } from "react-icons/fc";
import { GrStatusCriticalSmall} from "react-icons/gr"
import{Link} from "react-router-dom"
 const FooterDashboard = () => {
    return (
        <div className="navivator">
             <div className="navigator-footer">
      <Link to="/dashboard" className="active"><RiDashboardLine/><div>Dashboard</div></Link>
      <Link to="/dashboard/item"><AiOutlineCloudUpload/><div>Item</div></Link>
      <Link to="/dashboard/upload"><GrStatusCriticalSmall/><div>upload</div></Link>
      <Link to="/dashboard/list-order"><RiDeleteBin6Line/><div>List Order</div></Link>
     
    </div>
        </div>
    )
}
export default FooterDashboard;
