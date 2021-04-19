import React from 'react'
import { DefaultLayout } from "../defaultLayout"
import { DefaultLayout2 } from "./DefaultLayout2"

export const ShopProfile = () => {

    return (
        <DefaultLayout>
            <div className="add-background">
                <div className="page-container">
                    <div className="page-content-wrapper">
                        <div className="shop-profile-page">
                            <div className="shop-profile-header">
                                <div className="caption">
                                    <div className="title">Shop Profile</div>
                                    <div className="subtitle">View Shop status and update your Shop profile </div>
                                </div>

                            </div>
                            <div className="shop-profile-body">
                                <div className="shop-profile-tab-wrapper">
                                    <div className="shop-profile">
                                        <div className="shop-profile-content">
                                            <div className="basic-info-list">
                                                <div className="header-info">
                                                    <div className="cover">
                                                        <div className="cover-edit">Edit Cover Image</div>
                                                    </div>
                                                    <div class="avatar">
                                                        <div class="avatar-edit">
                                                            Edit
                                                        </div>
                                                    </div>
                                                    <div class="user">
                                                        <div class="name">
                                                            trantu
                                                        </div>
                                                        <div class="join-time">
                                                            Joined 10-11-2018
                                                        </div>
                                                        <div class="following">
                                                            <div class="item"><span>Follower</span> <span>0</span></div>
                                                            <div class="split"></div>
                                                            <div class="item"><span>Follow</span> <span>1</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="list-info">
                                                    <div className="info-row">
                                                        <div className="info-row-left">
                                                            <i className="shop-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                                                    <path d="M29.5 12.4h-1.8v18H4.3v-18H2.5V7h7.8c-.4-.6-.6-1.2-.6-1.8 0-2 1.6-3.6 3.6-3.6 1.1 0 2.1.5 2.7 1.3.6-.8 1.6-1.3 2.7-1.3 2 0 3.6 1.6 3.6 3.6 0 .6-.2 1.3-.5 1.8h7.8v5.4zM16.9 28.6h9v-7.2h-9v7.2zm0-9h9v-7.2h-9v7.2zm-10.8 9h9v-7.2h-9v7.2zm0-9h9v-7.2h-9v7.2zm7.2-16.2c-1 0-1.8.8-1.8 1.8S12.3 7 13.3 7s1.8-.8 1.8-1.8-.8-1.8-1.8-1.8zm5.4 0c-1 0-1.8.8-1.8 1.8S17.7 7 18.7 7s1.8-.8 1.8-1.8-.8-1.8-1.8-1.8zm9 5.4H4.3v1.8h23.5V8.8z"></path>
                                                                </svg>
                                                            </i>
                                                            <div className="mini-title">Product</div>
                                                        </div>
                                                        <a href="" className="info-row-right">
                                                            0
                                                            <i class="shop-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                                    <path d="M9.18933983,8 L5.21966991,11.9696699 C4.9267767,12.2625631 4.9267767,12.7374369 5.21966991,13.0303301 C5.51256313,13.3232233 5.98743687,13.3232233 6.28033009,13.0303301 L10.7803301,8.53033009 C11.0732233,8.23743687 11.0732233,7.76256313 10.7803301,7.46966991 L6.28033009,2.96966991 C5.98743687,2.6767767 5.51256313,2.6767767 5.21966991,2.96966991 C4.9267767,3.26256313 4.9267767,3.73743687 5.21966991,4.03033009 L9.18933983,8 Z"></path>
                                                                </svg>
                                                            </i>
                                                        </a>
                                                    </div>

                                                    <div className="info-row">
                                                        <div className="info-row-left">
                                                            <i className="shop-icon">
                                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 32 32">
                                                                    <path d="M0 19V6c0-3.3 2.7-6 6-6h20c3.3 0 6 2.7 6 6v13c0 3.3-2.7 5-6 5H14l-8 8v-8c-3.3 0-6-1.7-6-5zm26 3c2.2 0 4-.8 4-3V6c0-2.2-1.8-4-4-4H6C3.8 2 2 3.8 2 6v13c0 2.2 1.8 3 4 3h2v5l5-5h13zM8 22"></path>
                                                                    <circle cx="8" cy="12" r="2"></circle>
                                                                    <circle cx="16" cy="12" r="2"></circle>
                                                                    <circle cx="24" cy="12" r="2"></circle>
                                                                </svg>
                                                            </i>
                                                            <div className="mini-title">Response Rate</div>
                                                        </div>
                                                        <div className="info-row-right">
                                                            57%
                                                        </div>
                                                    </div>

                                                    <div className="info-row">
                                                        <div className="info-row-left">
                                                            <i className="shop-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                                                    <path d="M16 32C7.2 32 0 24.8 0 16S7.2 0 16 0s16 7.2 16 16-7.2 16-16 16zm0-30C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2zm4.4 20.7l-5.9-5.9c-.3-.2-.5-.4-.5-.8V7c0-.6.4-1 1-1s1 .4 1 1v8.6l5.7 5.7c.4.4.4 1 0 1.4-.4.4-1 .4-1.3 0z"></path>
                                                                </svg>
                                                            </i>
                                                            <div className="mini-title">Response Time</div>
                                                        </div>
                                                        <div className="info-row-right">
                                                            In few hours
                                                        </div>
                                                    </div>

                                                    <div className="info-row">
                                                        <div className="info-row-left">
                                                            <i className="shop-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                                                    <path d="M16 4.83l3.18 7 .48 1.06 1.16.11 6.76.61L22.27 19l-.75.75.2 1 1.38 7.19-6.1-3.72-1-.64-1 .64-6.15 3.7 1.42-7.16.21-1-.76-.76-5.31-5.39 6.77-.61 1.16-.11.48-1.06 3.18-7M16 0l-5 11-11 1 8.3 8.37L6 32l10-6.07L26 32l-2.31-11.63L32 12l-11-1-5-11z"></path>
                                                                </svg>
                                                            </i>
                                                            <div className="mini-title">Shop Feedback</div>
                                                        </div>
                                                        <a href="" className="info-row-right">
                                                            0
                                                        </a>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="shop-info">
                                                <div className="edit-info-form">
                                                    <div className="form-section">
                                                        <div className="form-title">Shop Name</div>
                                                        <form autoComplete="off" className="form-content">
                                                            <div className="form-item">
                                                                <label for="name" className="form-item__label"></label>
                                                                <div className="form-item__control">
                                                                    <div className="form-item__content">
                                                                        <div className="shop-input shop-name-input">
                                                                            <div className="shop-input__inner">
                                                                                <input type="text" placeholder="Shop Name" name="profile-nickname" resize="vertical" rows="2" minrows="2" maxlength="30" restrictiontype="input" showwordlimit="true" max="Infinity" min="-Infinity" className="shop-input__input"/>
                                                                                <div className="shop-input__sulfix"><span class="shop-input__count">9/30</span></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="form-section media-location">
                                                        <div className="form-title">Description Photo</div>
                                                        <div className="form-content">
                                                            <div className="order-list">
                                                                <div className="media-picker">
                                                                    <label for="img-picker" style={{display:"block", width:"100%", height:"100%"}}>
                                                                        <div className="media-picker__placeholder">
                                                                            <i className="add-icon">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                                                    <path fill-rule="evenodd" d="M8.48176704,1.5 C8.75790942,1.5 8.98176704,1.72385763 8.98176704,2 L8.981,7.997 L15,7.99797574 C15.2761424,7.99797574 15.5,8.22183336 15.5,8.49797574 C15.5,8.77411811 15.2761424,8.99797574 15,8.99797574 L8.981,8.997 L8.98176704,15 C8.98176704,15.2761424 8.75790942,15.5 8.48176704,15.5 C8.20562467,15.5 7.98176704,15.2761424 7.98176704,15 L7.981,8.997 L2,8.99797574 C1.72385763,8.99797574 1.5,8.77411811 1.5,8.49797574 C1.5,8.22183336 1.72385763,7.99797574 2,7.99797574 L7.981,7.997 L7.98176704,2 C7.98176704,1.72385763 8.20562467,1.5 8.48176704,1.5 Z"></path>
                                                                                </svg>
                                                                            </i>
                                                                            <div className="media-picker__placeholder-title"> Add Photo (0/5)</div>
                                                                            <div className="media-picker__picker-img">
                                                                                <div className="img-uploader">
                                                                                    <div className="img-uploader__wrapper">
                                                                                        <div className="shop-upload">
                                                                                            <div className="shop-upload-wrapper">
                                                                                                <input type="file" name="file" id="img-picker" class="shop-upload__input"/>
                                                                                                <img src=""></img>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </label>

                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="form-section">
                                                        <div className="form-title">Shop Description</div>
                                                        <div className="form-content">
                                                            <div className="shop-input__area">
                                                                <textarea type="textarea" placeholder="Enter your description or information about your shop here " resize="vertical" rows="2" minrows="5" maxlength="500" restrictiontype="input" showwordlimit="true" max="Infinity" min="-Infinity" class="shop-input__inner " style={{resize:"vertical", minHeight:"103px"}}></textarea>
                                                                <span class="shop-input__count">0/500</span>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                                <button className="save-btn">
                                                    <span>Save</span>
                                                </button>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


        </DefaultLayout>
    )

}