import React from 'react'
import DefaultLayout from '../../app/layout/Defaultlayout'

export const UserProfile = () => {
    return(
        <DefaultLayout>
            <div className="addbackground">
                <div className="container">
                    <div className="main-profile">
                        <div className="main-profile__wrapper">
                            <div className="profile-section">
                                <div className="profile-section__header">
                                    <div className="profile-section__header-left">
                                        <div className="profile-section__header-title">My Profile</div>
                                        <div className="profile-section__header-subtitle">Manage info for security</div>
                                    </div>
                                </div>
                                <div className="profile-section__body">
                                    <div className="profile-section__body-left">
                                        <div className="input-with-label">
                                            <div className="input-with-label__wrapper">
                                                <div className="input-with-label__label">
                                                    <label>Username</label>
                                                </div>
                                                <div className="input-with-label__content">
                                                    <div className="input-with-label__inline-container">
                                                        <div className="input-with-label__input-text">trantu</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-with-label">
                                            <div className="input-with-label__wrapper">
                                                <div className="input-with-label__label">
                                                    <label>Name</label>
                                                </div>
                                                <div className="input-with-label__content">
                                                    <div className="input-with-validator-wrapper">
                                                        <div className="input-with-validator">
                                                            <input type="text" placeholder="" maxlength="255" value="Tus"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-with-label">
                                            <div className="input-with-label__wrapper">
                                                <div className="input-with-label__label">
                                                    <label>Email</label>
                                                </div>
                                                <div className="input-with-label__content">
                                                    <div className="input-with-label__inline-container">
                                                        <div className="input-with-label__input-text">trantu1472@gmail.com</div>
                                                        <button className="btn-change">Change</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-with-label">
                                            <div className="input-with-label__wrapper">
                                                <div className="input-with-label__label">
                                                    <label>Phone Number</label>
                                                </div>
                                                <div className="input-with-label__content">
                                                    <div className="input-with-label__inline-container">
                                                        <div className="input-with-label__input-text">********45</div>
                                                        <button className="btn-change">Change</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-with-label">
                                            <div className="input-with-label__wrapper">
                                                <div className="input-with-label__label">
                                                    <label>Shop Name</label>
                                                </div>
                                                <div className="input-with-label__content">
                                                    <div className="input-with-validator-wrapper">
                                                        <div className="input-with-validator">
                                                            <input type="text" placeholder="" maxlength="255" value=""/>
                                                            <button className="btn-change">Create Shop</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-with-label">
                                            <div className="input-with-label__wrapper">
                                                <div className="input-with-label__label">
                                                    <label>Gender</label>
                                                </div>
                                                <div className="input-with-label__content">
                                                    <div className="gender">
                                                        
                                                        <div className="stardust-radio-group">
                                                            <div className="stardust-radio stardust-radio--checked" >
                                                                <div className="stardust-radio-button stardust-radio-button--checked">
                                                                    <div className="stardust-radio-button__outer-circle">
                                                                        <div className="stardust-radio-button__inner-circle"></div>
                                                                    </div>
                                                                </div>
                                                                <div className="stardust-radio__content">
                                                                    <div className="stardust-radio__label">Male</div>
                                                                </div>
                                                            </div>
                                                            <div className="stardust-radio" >
                                                                <div className="stardust-radio-button">
                                                                    <div className="stardust-radio-button__outer-circle">
                                                                        <div className="stardust-radio-button__inner-circle"></div>
                                                                    </div>
                                                                </div>
                                                                    <div className="stardust-radio__content">
                                                                        <div className="stardust-radio__label">Female</div>
                                                                    </div>
                                                            </div>
                                                            <div className="stardust-radio" >
                                                                <div className="stardust-radio-button">
                                                                    <div className="stardust-radio-button__outer-circle">
                                                                        <div className="stardust-radio-button__inner-circle"></div></div></div>
                                                                <div className="stardust-radio__content">
                                                                    <div className="stardust-radio__label">Other</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="submit-profile">
                                            <button type="button" className="btn-submit" aria-disabled="false">Save</button>
                                            <button type="button" className="btn-seller" aria-disabled="false">Change to Seller Channel</button>

                                        </div>
                                    </div> 
                                    <div className="profile-section__body-right">
                                        <div className="avatar-uploader">
                                            <div className="avatar-uploader__avatar">
                                                <div class="avatar-uploader__placeholder">
                                                    <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="profile-icon">
                                                        <g>
                                                            <circle cx="7.5" cy="4.5" fill="none" r="3.8" stroke-miterlimit="10"></circle>
                                                            <path d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="none" stroke-linecap="round" stroke-miterlimit="10"></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <input class="avatar-uploader__file-input" name="file" type="file"></input>
                                            <button type="button" className="btn-img" >Choose Photo</button>
                                            <div class="avatar-uploader__text-container">
                                                <div class="avatar-uploader__text">Maximum file size 1 MB</div>
                                                <div class="avatar-uploader__text">File format: .JPEG, .PNG</div></div>
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