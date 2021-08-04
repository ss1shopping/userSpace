import React,{useState} from 'react'
import {DefaultLayout} from "../main/defaultLayout"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Formik, useField, Form } from "formik"
import * as Yup from "yup"
import { FaYoast } from 'react-icons/fa';
import { join } from 'redux-saga/effects';
 const CreateCategory = () => {
     const [category, setCategory] = useState({})
    return (
        <DefaultLayout>
            <div className="create__category">
            <Formik initialValues={{
                  email: "",
                  password: "",

                }}
                  validationSchema={Yup.object({
                    title: Yup.string()
                      .required("title is require"),
                    slug: Yup.string()
                      .required("slug is require"),
                      content:Yup.string()
                      .required(),
                    parentId:Yup.string(),
                    logo:Yup.string(),
                    image:Yup.string(),
                    path:Yup.string(),
                    position:Yup.string(),
                    isPublic:Yup.string(),
                    isActive:Yup.string(),
                    meta_title:Yup.string()
                  })}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                  }) => (
                      <>
                    <div className="create__category--left">
                    <div className="create__category--title">
                        <div>
                            <div className="edit-label">
                                <div className="mandatory">
                                    <span className="mandatory__icon">*</span>
                                </div>
                                <span>Title</span>
                            </div>
                            <div> <input type="text" /></div>
                        </div>
                                           
                    </div>
                  <CKEditor
                    editor={ClassicEditor}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
              
                </div>
                <div className="create__category--right">
                left right
                </div>
                </>
                    )}
             </Formik>
                    </div>
              
        </DefaultLayout>
    )
}
export default CreateCategory;