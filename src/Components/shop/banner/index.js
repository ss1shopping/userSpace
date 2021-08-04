import React,{useState} from 'react'
import {MdAdd} from "react-icons/md"
import { Link } from 'react-router-dom'
import {DefaultLayout} from "../main/defaultLayout"
import { ItemBanner } from './item'
export const Banner = () => {
    const [slider, setslider] = useState()
    return (
        <DefaultLayout>
          <div className="banner">
              <div className="banner--header">
                    <div className="banner--header--name"> Quản lí Banner</div>
                    {/* <div className="banner--header--add">  
                       <Link to="/banhang/banner/create" className="btn btn--outline" ><MdAdd></MdAdd> Thêm mới </Link> 
                     </div> */}
              </div>
              <div>
              <div className="banner--slider">
                  <div className="banner__title">Ảnh slider  </div>
                    <table>
                        <thead>
                            <tr>
                                <th> Ảnh</th>
                                <th className="th"> Tiêu đề</th>
                                <th  className="th"> Đường dẫn</th>
                                <th> Thao tác</th>

                            </tr>
                        </thead>
                        <tbody>
                            {

                        [...Array(5)].map((_, i) => <ItemBanner slider={slider} index={i} key={i}/>)
                            }
                     
                  </tbody>
                  </table>
              </div>
              </div>
              </div>  
        </DefaultLayout>
    )
}
