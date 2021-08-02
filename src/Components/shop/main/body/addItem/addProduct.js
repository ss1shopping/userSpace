import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { itemActions } from '../../../../../app/store/ducks/itemReducer'
import { layoutActions } from '../../../../../app/store/ducks/layoutReducer'

import { DefaultLayout2 } from "../DefaultLayout2"
import { Model } from './model'
import { addItem } from '../../../../../app/crud/item.crud'
import { Option } from './option'
import {API_URL} from "../../../../../app/constant/api/apiConstants"
export const AddProduct = () => {

    const dispatch = useDispatch()
    let [status, setStatus] = useState(false)
	const [product, setProduct] = useState({})
	const [attributes,setAttribute]=useState([])
     const [number, setnumber] = useState(0)
   
    const [desc, setdesc] = useState("")
    // let [attributes, setattribute] = useState([])
    const [quantity, setquantity] = useState(0)
    const [newModel, setnewModel] = useState([])
    const [listImage, setlistImage] = useState([])
    const [allprice, setAllprice] = useState(0)
    const [allQuantity, setAllquantity] = useState(0)
	const [allCost, setAllCost] = useState(0)
    //IN HRE lam, lam set all product
    const price = useSelector(state => state.itemReducer.price)
    const chooseCategoryToAdd = useSelector(state => state.categoryReducer.chooseCategoryToAdd)
    let tier_variations = useSelector(state => state.itemReducer.tier_variations)
	const variation = useSelector(state => state.itemReducer.variation)
	const products = useSelector(state => state.itemReducer.products)
    const model = useSelector(state => state.itemReducer.model)
    const model1 = useSelector(state => state.itemReducer.model1)
    const urlImage = useSelector(state => state.itemReducer.urlImage)
    const quantity1 = useSelector(state => state.itemReducer.quantity)

    const uploadImage = (formData) => {
        const config = {
            header: { "content-type": "multiple/form-data" }
        }
        Axios.post(`${API_URL}/item/uploadImage`, formData, config)
            .then(res => {

                dispatch(itemActions.addImageSuccessful(res.data))
            }
            )
    }
    const handleType = () => {
		dispatch(layoutActions.changeStatusVariation1(!status))
		dispatch(layoutActions.changeNumberVariation1(1))
        setStatus(!status)
        setnumber(1)
    }

    // const handleGroupAdd = () => {
	// 	dispatch(layoutActions.changeStatusVariation2(!addGroup))
	// 	dispatch(layoutActions.changeNumberVariation2(1))
    //     // setAddGroup(!addGroup)
    //     // setnumberGroup2(1)
    // }

    const handleUploadImage = (e, index) => {

        let objectUrl = URL.createObjectURL(e.target.files[0])
        let newArr = [...listImage]; // copying the old datas array
        newArr[index] = objectUrl; // replace e.target.value with whatever you want to change it to

        setlistImage(newArr);
       
        var formData = new FormData()
        formData.append("file", e.target.files[0])
        uploadImage(formData)
    }

    const handleSubmit = () => {
		let newProduct={...product}
		newProduct.products=products
		newProduct.variation=tier_variations
		newProduct.information=attributes
		addItem(newProduct)
		.then((result)=>{
			
			console.log(result);
		})
       // dispatch(itemActions.uploaditem())
    }
 const handleApplyForAll=(price,quantity,cost)=>{
	 let newProduct=[]
	//  let newVariation=[]
	 products.map((v,i)=>{
		newProduct.push({name:v.name,price,quantity,cost})
	 })
	
	 dispatch(itemActions.setProduct(newProduct))
 }

    return (
        <DefaultLayout2>
            <div className="element">
                <div className="product-new">
                    <div className="product-edit">
                        <div className="product-edit__container">
                            <div className="product-edit__main">
                                <section className="product-edit__section">
                                    <h2>Product Information</h2>
                                    <div className="product-basic-info">
                                        <div className="form-container">
                                            <div className="grid-edit-row">
                                                <div className="edit-label">
                                                    <div className="mandatory">
                                                        <span className="mandatory__icon">*</span>
                                                    </div>
                                                    <span>Product name</span>
                                                </div>
                                                <div className="edit-input">
                                                    <div className="product-edit-content">
                                                        <div className="product-input-wrapper">
                                                            <div className="product-input">
                                                                <div className="product-input__inner">
                                                                    <input type="text"
                                                                        placeholder="Input here"
                                                                        size="large" resize="vertical"
                                                                        rows="2"
                                                                        minrows="2"
                                                                        minLength="10"
                                                                        restrictiontype="input"
                                                                        max="Infinity" min="-Infinity"
                                                                        isround="true"
                                                                        unicodenormalized="true"
                                                                        className="product-input__input"
                                                                        onChange={(e) => setProduct({...product,name:e.target.value})}
                                                                    />
                                                                    <div className="product-input__sulfix">
                                                                        <span className="product-input__sulfix-split"></span>
                                                                        {product.name?product.name.length:0}/120
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
											<div className="grid-edit-row">
                                                <div className="edit-label">
                                                    <div className="mandatory">
                                                        <span className="mandatory__icon">*</span>
                                                    </div>
                                                    <span>Product sku</span>
                                                </div>
                                                <div className="edit-input">
                                                    <div className="product-edit-content">
                                                        <div className="product-input-wrapper">
                                                            <div className="product-input">
                                                                <div className="product-input__inner">
                                                                    <input type="text"
                                                                        placeholder="Input here"
                                                                        size="large" resize="vertical"
                                                                        rows="2"
                                                                        minrows="2"
                                                                        minLength="10"
                                                                        restrictiontype="input"
                                                                        max="Infinity" min="-Infinity"
                                                                        isround="true"
                                                                        unicodenormalized="true"
                                                                        className="product-input__input"
                                                                        onChange={(e) => setProduct({...product,sku:e.target.value})}
                                                                    />
                                                                    <div className="product-input__sulfix">
                                                                        <span className="product-input__sulfix-split"></span>
                                                                        {product.sku?product.sku.length:0}/120
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid-edit-row-description">
                                                <div className="edit-label">
                                                    <div className="mandatory">
                                                        <span className="mandatory__icon">*</span>
                                                    </div>
                                                    <span>Product description</span>
                                                </div>
                                                <div className="edit-input">
                                                    <div className="product-edit-content">
                                                        <div className="textarea-description" autosize="" maxlength="3000" minlength="100" maxrows="26" minrows="9" unicode-normalized="">
                                                            <div className="textarea-description__edit">
                                                                <div className="texarea-description__input">
                                                                    <textarea
                                                                        type="textarea"
                                                                        placeholder=""
                                                                        resize="none"
                                                                        rows="2"
                                                                        minrows="9"
                                                                        maxrows="26"
                                                                        autosize="true"
                                                                        minlength="100"
                                                                        restrictiontype="input"
                                                                        max="Infinity"
                                                                        min="-Infinity"
                                                                        unicodenormalized="true"
                                                                        className="textarea-description__inner"
                                                                        onChange={(e) => setProduct({...product,description:e.target.value})}
                                                                    ></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="textarea-label">
                                                        <span className="textarea-label__pre">0</span>
                                                        {product.description?product.description.length:0}/3000
                                                        </div>
                                                </div>
                                            </div>
                                            <div className="grid-edit-row">
                                                <div className="edit-label">
                                                    <div className="mandatory">
                                                        <span className="mandatory__icon">*</span>
                                                    </div>
                                                    <span>Category</span>
                                                </div>
                                                <div className="edit-input">
                                                    <div className="category-input">
                                                        <div className="category-name">
                                                            {chooseCategoryToAdd && chooseCategoryToAdd.map((v, i) => {
                                                                return (
                                                                    <span className="category-name__wrapper">
                                                                        <span className="category-name__item">{v.name}</span>
                                                                        <span className="spacer-point">{">"}</span>
                                                                    </span>

                                                                )
                                                            })}

                                                        </div>
                                                        <Link to="/banhang/choose-category" className="edit-category-btn">
                                                            <i className="btn-icon">
                                                                <svg data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M988.1 316.06a127.07 127.07 0 0 0-37.5-90.5L798.4 73.36c-49.9-49.9-131.1-49.9-181.1 0l-91.8 91.8-.3.3-.3.3-470.2 470.4a63.47 63.47 0 0 0-18.8 45.2v242.7a64.06 64.06 0 0 0 64 64h242.8a63.47 63.47 0 0 0 45.2-18.8l470.6-470.6 92.1-92.1a127.07 127.07 0 0 0 37.5-90.5zm-842.9 320l402.7-402.7 242.8 242.7-402.8 402.8zm-45.3 288v-242.7l242.7 242.7zm805.5-562.7l-69.5 69.4-242.7-242.7 69.5-69.5a64.22 64.22 0 0 1 90.6 0l152.2 152.2a64.37 64.37 0 0 1-.1 90.6z" data-name="Layer 1"></path></svg>
                                                            </i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid-edit-row">
                                                <div className="edit-label" >
                                                    <div className="mandatory">
                                                        <span className="mandatory__icon">*</span>
                                                    </div>
                                                    <span>Brand</span>
                                                </div>
                                                <div className="edit-input">
                                                    <div className="product-edit-content">
                                                        <div className="product-input-wrapper">
                                                            <div className="product-input">
                                                                <div className="product-input__inner">
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Input here"
                                                                        size="large"
                                                                        resize="vertical"
                                                                        rows="2"
                                                                        minrows="2"
                                                                        minlength="10"
                                                                        restrictiontype="input"
                                                                        max="Infinity"
                                                                        min="-Infinity"
                                                                        isround="true"
                                                                        unicodenormalized="true"
                                                                        className="product-input__input"
                                                                        onChange={(e) => setAttribute([...attributes,{name:"origin",value:e.target.value}])}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid-edit-row">
                                                <div className="edit-label">
                                                    <div className="mandatory">
                                                        <span className="mandatory__icon">*</span>
                                                    </div>
                                                    <span>Material</span>
                                                </div>
                                                <div className="edit-input">
                                                    <div className="product-edit-content">
                                                        <div className="product-input-wrapper">
                                                            <div className="product-input">
                                                                <div className="product-input__inner">
                                                                    <input type="text"
                                                                        placeholder="Input here"
                                                                        size="large"
                                                                        resize="vertical"
                                                                        rows="2"
                                                                        minrows="2"
                                                                        minlength="10"
                                                                        restrictiontype="input"
                                                                        max="Infinity"
                                                                        min="-Infinity"
                                                                        isround="true"
                                                                        unicodenormalized="true"
                                                                        className="product-input__input"
                                                                        onChange={(e) => setAttribute([...attributes,{name:"material",value:e.target.value}])}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid-edit-row">
                                                <div className="edit-label">
                                                    <div className="mandatory">
                                                        <span className="mandatory__icon">*</span>
                                                    </div>
                                                    <span>Origin</span>
                                                </div>
                                                <div className="edit-input">
                                                    <div className="product-edit-content">
                                                        <div className="product-input-wrapper">
                                                            <div className="product-input">
                                                                <div className="product-input__inner">
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Input here"
                                                                        size="large"
                                                                        resize="vertical"
                                                                        rows="2"
                                                                        minrows="2"
                                                                        minlength="10"
                                                                        restrictiontype="input"
                                                                        max="Infinity"
                                                                        min="-Infinity"
                                                                        isround="true"
                                                                        unicodenormalized="true"
                                                                        className="product-input__input"
																		onChange={(e) => setAttribute([...attributes,{name:"Origin",value:e.target.value}])}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
								{/* END INFORMATION */}
                                <section className="product-edit__section">
                                    <h2>Selling Information</h2>
                                    <div className="product-sale-info">
                                        <div className="grid-edit-row">
                                            <div className="edit-label">
                                                <div className="mandatory">
                                                    <span className="mandatory__icon">*</span>
                                                </div>
                                                <span>Price</span>
                                            </div>
                                            <div className="edit-input">
                                                <div className="product-edit-content">
                                                    <div className="product-input-wrapper">
                                                        <div className="product-input">
                                                            <div className="product-input__inner">
                                                                <div className="product-input__prefix">
                                                                    $
                                                                    <span className="product-input__prefix-split"></span>
                                                                </div>
                                                                <input
                                                                    type="number"
                                                                    placeholder="Input here"
                                                                    size="large"
                                                                    resize="vertical"
                                                                    rows="2"
                                                                    minrows="2"
                                                                    minlength="10"
                                                                    restrictiontype="input"
                                                                    max="Infinity"
                                                                    min="0"
                                                                    isround="true"
                                                                    unicodenormalized="true"
                                                                    className="product-input__input"
                                                                 onChange={(e) => setProduct({...product,price:e.target.value})}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid-edit-row">
                                            <div className="edit-label">
                                                <div className="mandatory">
                                                    <span className="mandatory__icon">*</span>
                                                </div>
                                                <span>Quantity</span>
                                            </div>
                                            <div className="edit-input">
                                                <div className="product-edit-content">
                                                    <div className="product-input-wrapper">
                                                        <div className="product-input">
                                                            <div className="product-input__inner">
                                                                <input
                                                                    type="number"
                                                                    placeholder="Input here"
                                                                    size="large"
                                                                    resize="vertical"
                                                                    rows="2" minrows="2"
                                                                    minlength="10"
                                                                    restrictiontype="input"
                                                                    max="Infinity"
                                                                    min="0" isround="true"
                                                                    unicodenormalized="true"
                                                                    className="product-input__input"
																	onChange={(e) => setProduct({...product,quantity:e.target.quantity})}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
										 {/* Price and Quantity */}
										 {/* Classification */}
                                        <div className="grid-edit-row" style={status ? { display: "none" } : { display: "flex" }}>
                                            <div className="edit-label">
                                                <span>Product classification</span>
                                            </div>
											{/**  ADD Classification*/}
                                            <div class="edit-type">
                                                <button type="button" className="type-btn" onClick={() => handleType()}>
                                                    <span>
                                                        <i className="type-btn__icon">
                                                            <svg data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                                                                <g data-name="Layer 1">
                                                                    <path d="M512 1024A512.2 512.2 0 0 1 312.7 40.2a512.12 512.12 0 0 1 398.6 943.5A507.07 507.07 0 0 1 512 1024zm0-960a447.88 447.88 0 0 0-316.8 764.8A448 448 0 1 0 686.4 99.2 444.4 444.4 0 0 0 512 64z"></path>
                                                                    <path d="M768 480H544V256a32 32 0 0 0-64 0v224H256a32 32 0 0 0 0 64h224v224a32 32 0 0 0 64 0V544h224a32 32 0 0 0 0-64z"></path>
                                                                </g>
                                                            </svg>
                                                        </i>
                                                        Add classification
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
										{/* END ADD CLASSIFICATION */}
                                        <div className="container" style={status ? { display: "block" } : { display: "none" }}>
                                           
														 {[...Array(number)].map((_, i) => <Option key={i} group={i} nameProduct={product &&product.name} />)}
													                      
                                            <div className="grid-edit-row">
											<div className="edit-label">
                                                    <span>Group {number}</span>
                                                </div>
                                                <div className="edit-type" >
                                                    <button type="button" className="type-btn" onClick={() => setnumber(number+1)}>
                                                        <span>
                                                            <i className="type-btn__icon">
                                                                <svg data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                                                                    <g data-name="Layer 1">
                                                                        <path d="M512 1024A512.2 512.2 0 0 1 312.7 40.2a512.12 512.12 0 0 1 398.6 943.5A507.07 507.07 0 0 1 512 1024zm0-960a447.88 447.88 0 0 0-316.8 764.8A448 448 0 1 0 686.4 99.2 444.4 444.4 0 0 0 512 64z"></path>
                                                                        <path d="M768 480H544V256a32 32 0 0 0-64 0v224H256a32 32 0 0 0 0 64h224v224a32 32 0 0 0 64 0V544h224a32 32 0 0 0 0-64z"></path>
                                                                    </g>
                                                                </svg>
                                                            </i>
                                                            Add
                                                        </span>
                                                    </button>
                                                </div>
                                     
                                            </div>
											{/* END CLASSIFICATION */}
                                            <div className="info-panel">
                                                <div className="grid-edit-row">
                                                    <div className="edit-label">
                                                        <span>Quick set</span>
                                                    </div>
                                                    <div className="edit-main-batch">
                                                        <form className="edit-main-batch__form">
                                                            <div className="batch-price">
                                                                <div className="edit-maint-batch_control">
                                                                    <div className="edit-main-batch__content">
                                                                        <div className="product-input">
                                                                            <div className="product-input__inner">
                                                                                <div className="product-input__prefix">
                                                                                    $
                                                                                    <span className="product-input__prefix-split"></span>
                                                                                </div>
                                                                                <input type="number" placeholder="Price"
																					size="large" resize="vertical" rows="2" minrows="2" 
																					restrictiontype="value" max="Infinity" min="-Infinity" 
																					class="product-input__input"
																					onChange={(e)=>setAllprice(+e.target.value)}
																					/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <div className="batch-storage">
                                                                <div className="edit-main-batch__control">
                                                                    <div className="edit-mait-batch__content">
                                                                        <div className="product-input">
                                                                            <div className="product-input__inner">
																		<input type="number" placeholder="Quantity" 
																			size="large" resize="vertical" rows="2" minrows="2" 
																			restrictiontype="value" max="Infinity" min="-Infinity" class="product-input__input" 
																			onChange={(e)=>setAllquantity(+e.target.value)}
																			/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="batch-sku">
                                                                <div className="edit-main-batch__control">
                                                                    <div className="edit-mait-batch__content">
                                                                        <div className="product-input">
                                                                            <div className="product-input__inner">
                                                                                <input type="number" placeholder="Cost" size="large" resize="vertical" 
																				rows="2" minrows="2" restrictiontype="value" max="Infinity"
																				 min="-Infinity" class="product-input__input"
																				 onChange={(e)=>setAllCost(+e.target.value)}
																				  />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                        <button className="apply-all-btn" type="button" onClick={()=>handleApplyForAll(allprice,allQuantity,allCost)}>
                                                            <span>Apply for all type</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="grid-edit-row">
                                                    <div className="edit-label">
                                                        <span>Manual set</span>
                                                    </div>
                                                    <div className="edit-input">
                                                        <div className="variation-model-panel">
                                                            <div className="row">
                                                                <div className="table-cell-header"><span>Name</span></div>
                                                                {/* {tier_variations.length > 0 ?

                                                                    <div className="table-cell-header"><span>{tier_variations[1] && tier_variations[1].name}</span></div> : ""
                                                                } */}
                                                                <div className="table-cell-header"><span>Price</span></div>
                                                                <div className="table-cell-header"><span>Quantity</span></div>
																<div className="table-cell-header"><span>Cost</span></div>
                                                                <div className="table-cell-header"><span>SKU</span></div>
                                                            </div>
                                                            {
                                                                  products&& products.map((v, i) => {
                                                                    return (
                                                                        <Model value={v} key={i} index={i} quantity={quantity} nameProduct={product &&product.name}></Model>
                                                                    )
                                                                })
                                                            }


                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </section>
                                <section className="product-edit__section">
                                    <h2>Image Management</h2>
                                    <div>
                                        <div className="image-offset">
                                            <div className="edit-label">
                                                <span>Product image</span>
                                            </div>
                                            <div className="image-manager">
                                                <div className="image-manager__container">
                                                    <div className="image-manager__item">
                                                        <div className="image-manager__content">
                                                            <label htmlFor="image-upload" className="image-manager__label">
                                                                <div className="image-manager__upload">
                                                                    <div className="file-upload">
                                                                        <div className="file-upload__wrapper">
                                                                            <input type="file" name="file" number={0} className="file-upload__input" id="image-upload" onChange={(e) => handleUploadImage(e, 0)} />
                                                                            <img src={listImage[0]} />
                                                                            <div className="file-upload__content">
                                                                                <i className="upload-icon">
                                                                                    <svg viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg">
                                                                                        <g fill-rule="nonzero">
                                                                                            <path d="M15 15V7.5a.5.5 0 1 1 1 0V15h7.5a.5.5 0 1 1 0 1H16v7.5a.5.5 0 1 1-1 0V16H7.5a.5.5 0 1 1 0-1H15z"></path>
                                                                                            <path d="M15.5 31C6.94 31 0 24.06 0 15.5 0 6.94 6.94 0 15.5 0 24.06 0 31 6.94 31 15.5 31 24.06 24.06 31 15.5 31zm0-1C23.508 30 30 23.508 30 15.5S23.508 1 15.5 1 1 7.492 1 15.5 7.492 30 15.5 30z"></path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </i>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                            <div className="explain-text">
                                                                <div className="mandatory">
                                                                    <div className="mandatory__icon">*</div>
                                                                </div>
                                                                Cover Image
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="image-manager__item">
                                                        <div className="image-manager__content">
                                                            <label htmlFor="image-upload" className="image-manager__label">
                                                                <div className="image-manager__upload">
                                                                    <div className="file-upload">
                                                                        <div className="file-upload__wrapper">
                                                                            <input type="file" name="file" number={1} className="file-upload__input" id="image-upload" onChange={(e) => handleUploadImage(e, 1)} />
                                                                            <img src={listImage[1]} />
                                                                            <div className="file-upload__content">
                                                                                <i className="upload-icon">
                                                                                    <svg viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg">
                                                                                        <g fill-rule="nonzero">
                                                                                            <path d="M15 15V7.5a.5.5 0 1 1 1 0V15h7.5a.5.5 0 1 1 0 1H16v7.5a.5.5 0 1 1-1 0V16H7.5a.5.5 0 1 1 0-1H15z"></path>
                                                                                            <path d="M15.5 31C6.94 31 0 24.06 0 15.5 0 6.94 6.94 0 15.5 0 24.06 0 31 6.94 31 15.5 31 24.06 24.06 31 15.5 31zm0-1C23.508 30 30 23.508 30 15.5S23.508 1 15.5 1 1 7.492 1 15.5 7.492 30 15.5 30z"></path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </i>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                            <div className="explain-text">
                                                                <span>
                                                                    <span className="explain-text__text">Picture</span>
                                                                    1

                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="image-manager__item">
                                                        <div className="image-manager__content">
                                                            <label for="image-upload" className="image-manager__label">
                                                                <div className="image-manager__upload">
                                                                    <div className="file-upload">
                                                                        <div className="file-upload__wrapper">
                                                                            <input type="file" name="file" className="file-upload__input" id="image-upload" onChange={(e) => handleUploadImage(e, 2)} />
                                                                            <img src={listImage[2]} />
                                                                            <div className="file-upload__content">
                                                                                <i className="upload-icon">
                                                                                    <svg viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg">
                                                                                        <g fill-rule="nonzero">
                                                                                            <path d="M15 15V7.5a.5.5 0 1 1 1 0V15h7.5a.5.5 0 1 1 0 1H16v7.5a.5.5 0 1 1-1 0V16H7.5a.5.5 0 1 1 0-1H15z"></path>
                                                                                            <path d="M15.5 31C6.94 31 0 24.06 0 15.5 0 6.94 6.94 0 15.5 0 24.06 0 31 6.94 31 15.5 31 24.06 24.06 31 15.5 31zm0-1C23.508 30 30 23.508 30 15.5S23.508 1 15.5 1 1 7.492 1 15.5 7.492 30 15.5 30z"></path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </i>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                            <div className="explain-text">
                                                                <span>
                                                                    <span className="explain-text__text">Picture</span>
                                                                    2
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="image-manager__item">
                                                        <div className="image-manager__content">
                                                            <label for="image-upload" className="image-manager__label">
                                                                <div className="image-manager__upload">
                                                                    <div className="file-upload">
                                                                        <div className="file-upload__wrapper">
                                                                            <input type="file" name="file" className="file-upload__input" id="image-upload" onChange={(e) => handleUploadImage(e, 3)} />
                                                                            <img src={listImage[3]} />
                                                                            <div className="file-upload__content">
                                                                                <i className="upload-icon">
                                                                                    <svg viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg">
                                                                                        <g fill-rule="nonzero">
                                                                                            <path d="M15 15V7.5a.5.5 0 1 1 1 0V15h7.5a.5.5 0 1 1 0 1H16v7.5a.5.5 0 1 1-1 0V16H7.5a.5.5 0 1 1 0-1H15z"></path>
                                                                                            <path d="M15.5 31C6.94 31 0 24.06 0 15.5 0 6.94 6.94 0 15.5 0 24.06 0 31 6.94 31 15.5 31 24.06 24.06 31 15.5 31zm0-1C23.508 30 30 23.508 30 15.5S23.508 1 15.5 1 1 7.492 1 15.5 7.492 30 15.5 30z"></path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </i>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                            <div className="explain-text">
                                                                <span>
                                                                    <span className="explain-text__text">Picture</span>
                                                                    3
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="image-manager__item">
                                                        <div className="image-manager__content">
                                                            <label for="image-upload" className="image-manager__label">
                                                                <div className="image-manager__upload">
                                                                    <div className="file-upload">
                                                                        <div className="file-upload__wrapper">
                                                                            <input type="file" name="file" className="file-upload__input" id="image-upload" onChange={(e) => handleUploadImage(e, 4)} />
                                                                            <img src={listImage[4]} />
                                                                            <div className="file-upload__content">
                                                                                <i className="upload-icon">
                                                                                    <svg viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg">
                                                                                        <g fill-rule="nonzero">
                                                                                            <path d="M15 15V7.5a.5.5 0 1 1 1 0V15h7.5a.5.5 0 1 1 0 1H16v7.5a.5.5 0 1 1-1 0V16H7.5a.5.5 0 1 1 0-1H15z"></path>
                                                                                            <path d="M15.5 31C6.94 31 0 24.06 0 15.5 0 6.94 6.94 0 15.5 0 24.06 0 31 6.94 31 15.5 31 24.06 24.06 31 15.5 31zm0-1C23.508 30 30 23.508 30 15.5S23.508 1 15.5 1 1 7.492 1 15.5 7.492 30 15.5 30z"></path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </i>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                            <div className="explain-text">
                                                                <span>
                                                                    <span className="explain-text__text">Picture</span>
                                                                    4
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="image-manager__item">
                                                        <div className="image-manager__content">
                                                            <label for="image-upload" className="image-manager__label">
                                                                <div className="image-manager__upload">
                                                                    <div className="file-upload">
                                                                        <div className="file-upload__wrapper">
                                                                            <input type="file" name="file" className="file-upload__input" id="image-upload" onChange={(e) => handleUploadImage(e, 5)} />
                                                                            <img src={listImage[5]} />
                                                                            <div className="file-upload__content">
                                                                                <i className="upload-icon">
                                                                                    <svg viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg">
                                                                                        <g fill-rule="nonzero">
                                                                                            <path d="M15 15V7.5a.5.5 0 1 1 1 0V15h7.5a.5.5 0 1 1 0 1H16v7.5a.5.5 0 1 1-1 0V16H7.5a.5.5 0 1 1 0-1H15z"></path>
                                                                                            <path d="M15.5 31C6.94 31 0 24.06 0 15.5 0 6.94 6.94 0 15.5 0 24.06 0 31 6.94 31 15.5 31 24.06 24.06 31 15.5 31zm0-1C23.508 30 30 23.508 30 15.5S23.508 1 15.5 1 1 7.492 1 15.5 7.492 30 15.5 30z"></path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </i>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                            <div className="explain-text">
                                                                <span>
                                                                    <span className="explain-text__text">Picture</span>
                                                                    5
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="image-manager__item">
                                                        <div className="image-manager__content">
                                                            <label for="image-upload" className="image-manager__label">
                                                                <div className="image-manager__upload">
                                                                    <div className="file-upload">
                                                                        <div className="file-upload__wrapper">
                                                                            <input type="file" name="file" className="file-upload__input" id="image-upload" onChange={(e) => handleUploadImage(e, 6)} />
                                                                            <img src={listImage[6]} />
                                                                            <div className="file-upload__content">
                                                                                <i className="upload-icon">
                                                                                    <svg viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg">
                                                                                        <g fill-rule="nonzero">
                                                                                            <path d="M15 15V7.5a.5.5 0 1 1 1 0V15h7.5a.5.5 0 1 1 0 1H16v7.5a.5.5 0 1 1-1 0V16H7.5a.5.5 0 1 1 0-1H15z"></path>
                                                                                            <path d="M15.5 31C6.94 31 0 24.06 0 15.5 0 6.94 6.94 0 15.5 0 24.06 0 31 6.94 31 15.5 31 24.06 24.06 31 15.5 31zm0-1C23.508 30 30 23.508 30 15.5S23.508 1 15.5 1 1 7.492 1 15.5 7.492 30 15.5 30z"></path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </i>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                            <div className="explain-text">
                                                                <span>
                                                                    <span className="explain-text__text">Picture</span>
                                                                    6
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="image-manager__item">
                                                        <div className="image-manager__content">
                                                            <label for="image-upload" className="image-manager__label">
                                                                <div className="image-manager__upload">
                                                                    <div className="file-upload">
                                                                        <div className="file-upload__wrapper">
                                                                            <input type="file" name="file" className="file-upload__input" id="image-upload" onChange={(e) => handleUploadImage(e, 7)} />
                                                                            <img src={listImage[7]} />
                                                                            <div className="file-upload__content">
                                                                                <i className="upload-icon">
                                                                                    <svg viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg">
                                                                                        <g fill-rule="nonzero">
                                                                                            <path d="M15 15V7.5a.5.5 0 1 1 1 0V15h7.5a.5.5 0 1 1 0 1H16v7.5a.5.5 0 1 1-1 0V16H7.5a.5.5 0 1 1 0-1H15z"></path>
                                                                                            <path d="M15.5 31C6.94 31 0 24.06 0 15.5 0 6.94 6.94 0 15.5 0 24.06 0 31 6.94 31 15.5 31 24.06 24.06 31 15.5 31zm0-1C23.508 30 30 23.508 30 15.5S23.508 1 15.5 1 1 7.492 1 15.5 7.492 30 15.5 30z"></path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </i>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                            <div className="explain-text">
                                                                <span>
                                                                    <span className="explain-text__text">Picture</span>
                                                                    7
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section style={{ height: "30px" }}></section>
                            </div>
                            <div className="fixed-bottom-card" z-index="999">
                                <div className="fix-container" >
                                    <div className="fix-container__container">
                                        <div className="fix-container__btn-group">
                                            <button type="button" className="normal-btn">
                                                <span>Cancel</span>
                                            </button>
                                            <button type="button" className="normal-btn">
                                                <span>Save and Hide</span>
                                            </button>
                                            <button type="button" className="primary-btn" onClick={() => handleSubmit()}>
                                                <span>Save and Display</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-edit__side">
                                <div className="side-wrapper">
                                    <ul className="side-nav-list">
                                        <li className="side-nav-item">
                                            <a href="">Product Information</a>
                                        </li>
                                        <li className="side-nav-item">
                                            <a href="">Selling Information</a>
                                        </li>
                                        <li className="side-nav-item active">
                                            <a href="">Image Management</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout2>
    )
}