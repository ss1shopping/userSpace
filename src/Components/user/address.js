import React, {useState} from 'react'
import DefaultLayout from '../../app/layout/Defaultlayout'


export const Address = () => {
    let[addressStatus, setAddress] = useState(false)
    const handleAddress = () =>{
        setAddress(!addressStatus)
    }

    return (
        <DefaultLayout>
            <div className="addbackground">
                <div className="container">
                    <div className="userpage-sidebar">
                        <div className="user-page-brief">
                            <a className="user-page-brief__avatar" href="/users/profile">
                                <div className="user-avatar">
                                    <div className="user-avatar__placeholder">
                                        <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="icon-headshot">
                                            <g>
                                                <circle cx="7.5" cy="4.5" fill="none" r="3.8" stroke-miterlimit="10"></circle>
                                                <path d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="none" stroke-linecap="round" stroke-miterlimit="10"></path>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                            <div className="user-page-brief__right">
                                <div className="user-page-brief__username">trantu147</div>
                                <div>
                                    <a className="user-page-brief__edit" href="/users/profile">
                                        <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: "4px" }}>
                                            <path d="M8.54 0L6.987 1.56l3.46 3.48L12 3.48M0 8.52l.073 3.428L3.46 12l6.21-6.18-3.46-3.48" fill="#9B9B9B" fill-rule="evenodd"></path>
                                        </svg>
                                        Edit Profile
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="userpage-sidebar-menu">
                            <div className="stardust-dropdown">
                                <div className="stardust-dropdown__item-header">
                                    <a className="userpage-sidebar-menu-entry" href="/users/profile">
                                        <div className="userpage-sidebar-menu-entry__icon" style={{ background: "rgb(255, 193, 7)" }}>
                                            <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="mini-icon">
                                                <g>
                                                    <circle cx="7.5" cy="4.5" fill="none" r="3.8" stroke-miterlimit="10"></circle>
                                                    <path d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="none" stroke-linecap="round" stroke-miterlimit="10"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="userpage-sidebar-menu-entry__text">My Account</div>
                                    </a>
                                </div>
                                <div className="stardust-dropdown__item-body">
                                    <div className="userpage-sidebar-menu__subsection">
                                        <a className="menu-item " href="/users/profile">
                                            <span>Profile</span>
                                        </a>
                                        <a className="menu-item menu-item--chosen" href="/users/address">
                                            <span>Address</span>
                                        </a>
                                        <a className="menu-item" href="/users/change-password">
                                            <span>Change Password</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <a className="userpage-sidebar-menu-entry" href="/users/purchase">
                                <div className="userpage-sidebar-menu-entry__icon" style={{ background: "rgb(68, 181, 255)" }}>
                                    <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="mini-icon " style={{ fill: " rgb(255, 255, 255)" }}>
                                        <g>
                                            <rect fill="none" height="10" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="8" x="4.5" y="1.5"></rect>
                                            <polyline fill="none" points="2.5 1.5 2.5 13.5 12.5 13.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polyline>
                                            <line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="6.5" x2="10.5" y1="4" y2="4"></line>
                                            <line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="6.5" x2="10.5" y1="6.5" y2="6.5"></line>
                                            <line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="6.5" x2="10.5" y1="9" y2="9"></line>
                                        </g>
                                    </svg>
                                </div>
                                <div className="userpage-sidebar-menu-entry__text">Purchase</div>
                            </a>
                        </div>

                    </div>
                    <div className="main-profile">
                        <div className="main-profile__wrapper">
                            <div className="profile-section">
                                <div className="profile-section__header">
                                    <div className="profile-section__header-left">
                                        <div className="profile-section__header-title">My Address</div>
                                        <div className="profile-section__header-subtitle">Edit or add new address here.</div>
                                    </div>
                                    <div className="profile-section__header-btn">
                                        <button className="btn-address" onClick={() => handleAddress()}>
                                            <div className="btn-with-icon">
                                                <div className="btn-with-icon__icon">
                                                    <svg enable-background="new 0 0 10 10" viewBox="0 0 10 10" x="0" y="0" className="plus-icon">
                                                        <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon>
                                                    </svg>
                                                </div>
                                                <div>Add new address</div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <div className="address-card">
                                        <div className="address-display__left">
                                            <div className="address-display__field-container address-display__field-container--name">
                                                <div className="address-display__field-label">Full Name</div>
                                                <div className="address-display__field-content">
                                                    <span className="address-display__name-text">Tus</span>
                                                    <div className="bacc-default-badge">Default</div>
                                                </div>
                                            </div>
                                            <div className="address-display__field-container">
                                                <div className="address-display__field-label">Phone Number</div>
                                                <div className="address-display__field-content">09423424231</div>
                                            </div>
                                            <div className="address-display__field-container address-display__field-container__address">
                                                <div className="address-display__field-label">Address</div>
                                                <div className="address-display__field-content"><span>
                                                    Five Star Building<br />
                                                    Kim Giang<br />
                                                    Thanh Xuan District<br />
                                                    Hanoi</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="address-card__buttons">
                                            <div className="address-card__button-group">
                                                <button className="btn-change" onClick={() => handleAddress()}>Edit</button>
                                                <button className="btn-change">Delete</button>
                                            </div>
                                            <div className="address-card__button-group">
                                                <button type="button" className="btn-default btn-default--disabled" aria-disabled="true">Set as default</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={addressStatus ? {display:"block"}:{display:"none"}}>
                <div className="popup-form-outer">
                    <div className="address-form-wrapper">
                        <div>
                            <div className="popup-form address-modal">
                                <div className="popup-form__header">
                                    <div className="popup-form__title">Add a new address</div>
                                </div>
                                <div className="popup-form__main">
                                    <div className="popup-form__main-container">
                                        <div></div>
                                        <div className="address-modal__form_input">
                                            <div className="address-input">
                                                <div className="address-input__inner">
                                                    <input className="address-input__content" type="text" placeholder="Full Name" maxlength="64" value="" />
                                                </div>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className="address-modal__form_input">
                                            <div className="address-input">
                                                <div className="address-input__inner"><input className="address-input__content" type="text" placeholder="Phone Number" value="" /></div>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className="address-modal__form_input">
                                            <div className="address-input">
                                                <div className="address-input__inner">
                                                    <input className="address-input__content" type="text" placeholder="City" maxlength="64" value="" />
                                                </div>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className="address-modal__form_input">
                                            <div className="address-input">
                                                <div className="address-input__inner"><input className="address-input__content" type="text" placeholder="District" value="" /></div>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className="address-modal__form_input">
                                            <div className="address-input">
                                                <div className="address-input__inner"><input className="address-input__content" type="text" placeholder="Ward" value="" /></div>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className="address-modal__form_input">
                                            <div className="address-input">
                                                <div className="address-input__inner"><input className="address-input__content" type="text" placeholder="Street, Building..." maxlength="128" value="" /></div>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className="checkbox-default">
                                            <div className="checkbox-default__inner">
                                                <label className="stardust-checkbox" > 
                                                {/* onClick add checked */}
                                                    <input className="stardust-checkbox__input" type="checkbox" />
                                                    <div className="stardust-checkbox__box"></div>
                                                    Set as default address
                                                </label>
                                            </div>
                                        </div>
                                        <div className="checkbox-default"></div>
                                    </div>
                                </div>
                                <div className="popup-form__footer">
                                    <button className="cancel-btn" onClick={() => handleAddress()}>Trở Lại</button>
                                    <button type="button" className="btn-submit" onClick={() => handleAddress()}>Hoàn thành</button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="popup-background"></div>
            </div>

        </DefaultLayout>
    )
}