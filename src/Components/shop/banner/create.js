import React,{useState} from 'react'
import {DefaultLayout} from "../main/defaultLayout"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
 const CreateBanner = () => {
     const [banner, setBanner] = useState({})
    return (
        <DefaultLayout>
            <div className="create__banner">
               <div>
                   Quản lí Banner
                </div>
                <div className="">

                </div>
            </div>
        </DefaultLayout>
    )
}
export default CreateBanner;