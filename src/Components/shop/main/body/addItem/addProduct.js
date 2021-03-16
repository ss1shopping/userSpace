import React, { useState } from 'react'
import { DefaultLayout } from '../../defaultLayout'
import { DefaultLayout2 } from "../DefaultLayout2"
export const AddProduct = () => {
    let[status, setStatus] = useState(false)
    const handleType = () =>{
        setStatus(!status)
    }
    return (
        <DefaultLayout2>
            <div class="element">
                <div class="product-new">
                    <div class="product-edit">
                        <div class="product-edit__container">
                            <div class="product-edit__main">
                                <section class="product-edit__section">
                                    <h2>Product Information</h2>
                                    <div class="product-basic-info">
                                        <div class="form-container">
                                            <div class="grid-edit-row">
                                                <div class="edit-label">
                                                    <div class="mandatory">
                                                        <span class="mandatory__icon">*</span>
                                                    </div>
                                                    <span>Product name</span>
                                                </div>
                                                <div class="edit-input">
                                                   <div class="product-edit-content">
                                                    <div class="product-input-wrapper">
                                                            <div class="product-input">
                                                                <div class="product-input__inner">
                                                                    <input type="text" placeholder="Input here" size="large" resize="vertical" rows="2" minrows="2" minlength="10" restrictiontype="input" max="Infinity" min="-Infinity" isround="true" unicodenormalized="true" class="product-input__input"/>
                                                                    <div class="product-input__sulfix">
                                                                        <span class="product-input__sulfix-split"></span>
                                                                        0/120
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                   </div>
                                                </div>
                                            </div>
                                            <div class="grid-edit-row-description">
                                                <div class="edit-label">
                                                        <div class="mandatory">
                                                            <span class="mandatory__icon">*</span>
                                                        </div>
                                                        <span>Product description</span>
                                                    </div>
                                                    <div class="edit-input">
                                                        <div class="product-edit-content">
                                                            <div  class="textarea-description" autosize="" maxlength="3000" minlength="100" maxrows="26" minrows="9" unicode-normalized="">
                                                                <div class="textarea-description__edit">
                                                                    <div class="texarea-description__input">
                                                                        <textarea type="textarea" placeholder="" resize="none" rows="2" minrows="9" maxrows="26" autosize="true" minlength="100" restrictiontype="input" max="Infinity" min="-Infinity" unicodenormalized="true" class="textarea-description__inner" ></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="textarea-label">
                                                            <span class="textarea-label__pre">0</span>
                                                            /3000
                                                        </div>
                                                </div>
                                            </div>
                                            <div class="grid-edit-row">
                                                <div class="edit-label">
                                                    <div class="mandatory">
                                                        <span class="mandatory__icon">*</span>
                                                    </div>
                                                    <span>Category</span>
                                                </div>
                                                <div class="edit-input">
                                                   <div class="category-input">
                                                       <div class="category-name">
                                                           <span class="category-name__wrapper">
                                                               <span class="category-name__item">Smart devices</span>
                                                               <span class="spacer-point">{">"}</span>
                                                           </span>
                                                           <span class="category-name__wrapper">
                                                               <span class="category-name__item">Phone</span>
                                                               <span class="spacer-point">{">"}</span>
                                                           </span>
                                                           <span class="category-name__wrapper">
                                                               <span class="category-name__item">Samsung</span>
                                                           </span>
                                                       </div>
                                                       <button class="edit-category-btn">
                                                           <i class="btn-icon">
                                                            <svg data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M988.1 316.06a127.07 127.07 0 0 0-37.5-90.5L798.4 73.36c-49.9-49.9-131.1-49.9-181.1 0l-91.8 91.8-.3.3-.3.3-470.2 470.4a63.47 63.47 0 0 0-18.8 45.2v242.7a64.06 64.06 0 0 0 64 64h242.8a63.47 63.47 0 0 0 45.2-18.8l470.6-470.6 92.1-92.1a127.07 127.07 0 0 0 37.5-90.5zm-842.9 320l402.7-402.7 242.8 242.7-402.8 402.8zm-45.3 288v-242.7l242.7 242.7zm805.5-562.7l-69.5 69.4-242.7-242.7 69.5-69.5a64.22 64.22 0 0 1 90.6 0l152.2 152.2a64.37 64.37 0 0 1-.1 90.6z" data-name="Layer 1"></path></svg>
                                                           </i>
                                                       </button>
                                                   </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section class="product-edit__section">
                                    <h2>Selling Information</h2>
                                    <div class="product-sale-info">
                                        <div class="grid-edit-row">
                                            <div class="edit-label">
                                                <div class="mandatory">
                                                    <span class="mandatory__icon">*</span>
                                                </div>
                                                <span>Price</span>
                                            </div>
                                            <div class="edit-input">
                                                <div class="product-edit-content">
                                                    <div class="product-input-wrapper">
                                                        <div class="product-input">
                                                            <div class="product-input__inner">
                                                                <div class="product-input__prefix">
                                                                    $
                                                                    <span class="product-input__prefix-split"></span>
                                                                </div>
                                                                <input type="text" placeholder="Input here" size="large" resize="vertical" rows="2" minrows="2" minlength="10" restrictiontype="input" max="Infinity" min="-Infinity" isround="true" unicodenormalized="true" class="product-input__input" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grid-edit-row">
                                            <div class="edit-label">
                                                <div class="mandatory">
                                                    <span class="mandatory__icon">*</span>
                                                </div>
                                                <span>Quantity</span>
                                            </div>
                                            <div class="edit-input">
                                                <div class="product-edit-content">
                                                    <div class="product-input-wrapper">
                                                        <div class="product-input">
                                                            <div class="product-input__inner">
                                                                <input type="text" placeholder="Input here" size="large" resize="vertical" rows="2" minrows="2" minlength="10" restrictiontype="input" max="Infinity" min="-Infinity" isround="true" unicodenormalized="true" class="product-input__input" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grid-edit-row" style={status?{display:"none"}:{display:"flex"}}>
                                            <div class="edit-label">
                                                <span>Product classification</span>
                                            </div>
                                            <div class="edit-type">
                                                <button type="button" class="type-btn" onClick={()=>handleType()}>
                                                    <span>
                                                        <i class="type-btn__icon">
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
                                    <div style={status?{display:"block"}:{display:"none"}}>Hello</div>
                                        
                                    </div>
                                </section>    
                                <section class="product-edit__section">
                                    <h2>Image Management</h2>
                                    <div>
                                        <div class="image-offset">
                                            <div class="edit-label">
                                                <span>Product image</span>
                                            </div>
                                            <div class="image-manager">
                                                <div class="image-manager__container">
                                                    <div class="image-manager__item">
                                                        <div class="image-manager__content">
                                                            <label for="image-upload" class="image-manager__label">
                                                                <div class="image-manager__upload">
                                                                    <div class="file-upload">
                                                                            <div class="file-upload__wrapper">
                                                                                <input type="file" name="file" class="file-upload__input" id="image-upload"/>
                                                                                <div class="file-upload__content">
                                                                                    <i class="upload-icon">
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
                                                            <div class="explain-text">
                                                                <div class="mandatory">
                                                                    <div class="mandatory__icon">*</div>
                                                                </div>
                                                                Cover Image
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="image-manager__item">
                                                        <div class="image-manager__content">
                                                            <label for="image-upload" class="image-manager__label">
                                                                <div class="image-manager__upload">
                                                                    <div class="file-upload">
                                                                            <div class="file-upload__wrapper">
                                                                                <input type="file" name="file" class="file-upload__input" id="image-upload"/>
                                                                                <div class="file-upload__content">
                                                                                    <i class="upload-icon">
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
                                                            <div class="explain-text">
                                                                <span>
                                                                    <span class="explain-text__text">Picture</span>
                                                                    1
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="image-manager__item">
                                                        <div class="image-manager__content">
                                                            <label for="image-upload" class="image-manager__label">
                                                                <div class="image-manager__upload">
                                                                    <div class="file-upload">
                                                                            <div class="file-upload__wrapper">
                                                                                <input type="file" name="file" class="file-upload__input" id="image-upload"/>
                                                                                <div class="file-upload__content">
                                                                                    <i class="upload-icon">
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
                                                            <div class="explain-text">
                                                                <span>
                                                                    <span class="explain-text__text">Picture</span>
                                                                    2
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="image-manager__item">
                                                        <div class="image-manager__content">
                                                            <label for="image-upload" class="image-manager__label">
                                                                <div class="image-manager__upload">
                                                                    <div class="file-upload">
                                                                            <div class="file-upload__wrapper">
                                                                                <input type="file" name="file" class="file-upload__input" id="image-upload"/>
                                                                                <div class="file-upload__content">
                                                                                    <i class="upload-icon">
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
                                                            <div class="explain-text">
                                                                <span>
                                                                    <span class="explain-text__text">Picture</span>
                                                                    3
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="image-manager__item">
                                                        <div class="image-manager__content">
                                                            <label for="image-upload" class="image-manager__label">
                                                                <div class="image-manager__upload">
                                                                    <div class="file-upload">
                                                                            <div class="file-upload__wrapper">
                                                                                <input type="file" name="file" class="file-upload__input" id="image-upload"/>
                                                                                <div class="file-upload__content">
                                                                                    <i class="upload-icon">
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
                                                            <div class="explain-text">
                                                                <span>
                                                                    <span class="explain-text__text">Picture</span>
                                                                    4
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="image-manager__item">
                                                        <div class="image-manager__content">
                                                            <label for="image-upload" class="image-manager__label">
                                                                <div class="image-manager__upload">
                                                                    <div class="file-upload">
                                                                            <div class="file-upload__wrapper">
                                                                                <input type="file" name="file" class="file-upload__input" id="image-upload"/>
                                                                                <div class="file-upload__content">
                                                                                    <i class="upload-icon">
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
                                                            <div class="explain-text">
                                                                <span>
                                                                    <span class="explain-text__text">Picture</span>
                                                                    5
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="image-manager__item">
                                                        <div class="image-manager__content">
                                                            <label for="image-upload" class="image-manager__label">
                                                                <div class="image-manager__upload">
                                                                    <div class="file-upload">
                                                                            <div class="file-upload__wrapper">
                                                                                <input type="file" name="file" class="file-upload__input" id="image-upload"/>
                                                                                <div class="file-upload__content">
                                                                                    <i class="upload-icon">
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
                                                            <div class="explain-text">
                                                                <span>
                                                                    <span class="explain-text__text">Picture</span>
                                                                    6
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="image-manager__item">
                                                        <div class="image-manager__content">
                                                            <label for="image-upload" class="image-manager__label">
                                                                <div class="image-manager__upload">
                                                                    <div class="file-upload">
                                                                            <div class="file-upload__wrapper">
                                                                                <input type="file" name="file" class="file-upload__input" id="image-upload"/>
                                                                                <div class="file-upload__content">
                                                                                    <i class="upload-icon">
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
                                                            <div class="explain-text">
                                                                <span>
                                                                    <span class="explain-text__text">Picture</span>
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
                                <section style={{height:"30px"}}></section>
                            </div>
                            <div class="fixed-bottom-card" z-index="999">
                                <div class="fix-container" >
                                    <div class="fix-container__container">
                                        <div class="fix-container__btn-group">
                                            <button type="button" class="normal-btn">
                                                <span>Cancel</span>
                                            </button>
                                            <button type="button" class="normal-btn">
                                                <span>Save and Hide</span>
                                            </button>
                                            <button type="button" class="primary-btn">
                                                <span>Save and Display</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="product-edit__side">
                                <div class="side-wrapper">
                                    <ul class="side-nav-list">
                                        <li class="side-nav-item">
                                            <a href="">Product Information</a>
                                        </li>
                                        <li class="side-nav-item">
                                            <a href="">Selling Information</a>
                                        </li>
                                        <li class="side-nav-item active">
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