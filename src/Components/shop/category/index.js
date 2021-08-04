import React,{useState} from 'react'
import {DefaultLayout} from "../main/defaultLayout"
import {MdAdd} from "react-icons/md"
import { Link } from 'react-router-dom'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
 const Category = () => {
     const [category, setCategory] = useState({})
    return (
        <DefaultLayout>
            <div className="category">
              <div className="category--header">
                    <div className="category--header--name"> Quản lí Category</div>
                    <div className="category--header--add">  
                       <Link to="/banhang/category/create" className="btn btn--outline" ><MdAdd></MdAdd> Thêm mới </Link> 
                     </div>
              </div>
              <div>
              {/* <div className="category--slider">
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
              </div> */}
              </div>
              </div>  
        </DefaultLayout>
    )
}
export default Category;