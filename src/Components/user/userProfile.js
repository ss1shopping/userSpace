import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import DefaultLayout from '../../app/layout/Defaultlayout'
import { authActions } from '../../app/store/ducks/authReducer'
import DatePicker from "react-datepicker";
export const UserProfile = () => {
    let [profileStatus, setProfile] = useState(false)
    let [phoneStatus, setPhone] = useState(false)
    const handlePhone = () => {
        setPhone(!phoneStatus)
        setProfile(!profileStatus)
    }
    let [mailStatus, setMail] = useState(false)

    const handleMail = () => {
        setMail(!mailStatus)
        setProfile(!profileStatus)
    }



    const dispatch = useDispatch()
    const user = useSelector(state => state.authReducer.user)
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")
    const [shopName, setShopName] = useState("")
    const [gender, setGender] = useState("")
    const [dob, setDob] = useState(null)
    const [dobConvert, setDobConvert] = useState(null)
    const [change, setchange] = useState(true)
    useEffect(() => {
        dispatch(authActions.currentUser())
        setTimeout(() => {

            user ? setDob(new Date(user.dob)) : setDob(new Date())
        }, 1000);
    }, [change])

    const ConvertDob = (value) => {
        console.log(value);
        var twoDigitMonth = (value.getMonth() + 1) + "";
        if (twoDigitMonth.length == 1)
            twoDigitMonth = "0" + twoDigitMonth;
        var twoDigitDate = value.getDate() + "";
        if (twoDigitDate.length == 1)
            twoDigitDate = "0" + twoDigitDate;
        var currentDate = value.getFullYear() + "-" + twoDigitMonth + "-" + twoDigitDate;

        setDob(value)
        setDobConvert(currentDate)
    }
    const handleSubmit = () => {
        let null1 = true


        firstName ? null1 = true : setfirstName(user.firstname)
        lastName ? null1 = true : setlastName(user.lastname)
        email ? null1 = true : setEmail(user && user.email)
        phoneNumber ? null1 = true : setphoneNumber(user.phoneNumber)
        gender ? null1 = true : setGender(user.gender)
        dobConvert ? null1 = true : setDobConvert(user.dob)
        // console.log(dob);
        dispatch(authActions.updateUser(user._id, firstName, lastName, email, phoneNumber, gender, "", dobConvert))
        setchange(!change)
        setfirstName("")
        setlastName("")
        setEmail("")
        setphoneNumber("")
        setGender("")
        // setDob(user ? new Date(user.dob) : new Date(user.dob))
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
                                <div className="user-page-brief__username">herosd147</div>
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
                                <div class="stardust-dropdown__item-body">
                                    <div class="userpage-sidebar-menu__subsection">
                                        <a class="menu-item menu-item--chosen" href="/users/profile">
                                            <span>Profile</span>
                                        </a>
                                        <a class="menu-item" href="/users/address">
                                            <span>Address</span>
                                        </a>
                                        <a class="menu-item" href="/users/change-password">
                                            <span>Change Password</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <a class="userpage-sidebar-menu-entry" href="/users/purchase">
                                <div class="userpage-sidebar-menu-entry__icon" style={{background:"rgb(68, 181, 255)"}}>
                                    <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" class="mini-icon " style={{fill:" rgb(255, 255, 255)"}}>
                                        <g>
                                            <rect fill="none" height="10" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" width="8" x="4.5" y="1.5"></rect>
                                            <polyline fill="none" points="2.5 1.5 2.5 13.5 12.5 13.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polyline>
                                            <line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="6.5" x2="10.5" y1="4" y2="4"></line>
                                            <line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="6.5" x2="10.5" y1="6.5" y2="6.5"></line>
                                            <line fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="6.5" x2="10.5" y1="9" y2="9"></line>
                                        </g>
                                    </svg>
                                </div>
                                <div class="userpage-sidebar-menu-entry__text">Purchase</div>
                            </a>
                        </div>

                    </div>
                    <div className="main-profile">
                        <div className="main-profile__wrapper">
                            <div className="profile-section" style={profileStatus ? { display: "none" } : { display: "flex" }}>
                                <div className="profile-section__header">
                                    <div className="profile-section__header-left">
                                        <div className="profile-section__header-title">My Profile</div>
                                        <div className="profile-section__header-subtitle">Manage info for security</div>
                                    </div>
                                </div>
                                <div className="profile-section__body" >
                                    <div className="profile-section__body-left">
                                        <div className="input-with-label">
                                            <div className="input-with-label__wrapper">
                                                <div className="input-with-label__label">
                                                    <label>Username</label>
                                                </div>
                                                <div className="input-with-label__content">
                                                    <div className="input-with-label__inline-container">
                                                        <div className="input-with-label__input-text">{user && user.firstname}{user && user.lastname}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-with-label">
                                            <div className="input-with-label__wrapper">
                                                <div className="input-with-label__label">
                                                    <label> First Name</label>
                                                </div>
                                                <div className="input-with-label__content">
                                                    <div className="input-with-validator-wrapper">
                                                        <div className="input-with-validator">
<<<<<<< HEAD
                                                            <input type="text" placeholder="" maxlength="255" value="Tus" />
=======
                                                            <input type="text" placeholder="" maxlength="255" defaultValue={user && user.firstname} onChange={(e) => setfirstName(e.target.value)} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-with-label">
                                            <div className="input-with-label__wrapper">
                                                <div className="input-with-label__label">
                                                    <label> Last Name</label>
                                                </div>
                                                <div className="input-with-label__content">
                                                    <div className="input-with-validator-wrapper">
                                                        <div className="input-with-validator">
                                                            <input type="text" placeholder="" maxlength="255" defaultValue={user && user.lastname} onChange={(e) => setlastName(e.target.value)} />
>>>>>>> 12a5ce62fcb276778876cf1b41552611508854c0
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
<<<<<<< HEAD
                                                        <div className="input-with-label__input-text">trantu1472@gmail.com</div>
                                                        <button className="btn-change" onClick={() => handleMail()}>Change</button>
=======
                                                        <div className="input-with-label__input-text">{user && user.email}</div>
                                                        <button className="btn-change">Change</button>
>>>>>>> 12a5ce62fcb276778876cf1b41552611508854c0
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
<<<<<<< HEAD
                                                        <div className="input-with-label__input-text">********45</div>
                                                        <button className="btn-change" onClick={() => handlePhone()}>Change</button>
=======
                                                        <div className="input-with-label__input-text">{user && user.phoneNumber}</div>
                                                        <button className="btn-change">Change</button>
>>>>>>> 12a5ce62fcb276778876cf1b41552611508854c0
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
<<<<<<< HEAD
                                                            <input type="text" placeholder="" maxlength="255" value="" />
=======
                                                            <input type="text" placeholder="" maxlength="255" defaultValue={user && user.shopId.name} onChange={(e) => setShopName(e.target.value)} />
>>>>>>> 12a5ce62fcb276778876cf1b41552611508854c0
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
                                                                        <div className="stardust-radio-button__inner-circle">
                                                                            <input type="checkbox" style={{ display: "none" }} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="stardust-radio__content">
                                                                    <div className="stardust-radio__label">Male</div>
                                                                </div>
                                                            </div>
                                                            <div className="stardust-radio" >
                                                                <div className="stardust-radio-button">
                                                                    <div className="stardust-radio-button__outer-circle">
                                                                        <div className="stardust-radio-button__inner-circle">
                                                                            <input type="checkbox" style={{ display: "none" }} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="stardust-radio__content">
                                                                    <div className="stardust-radio__label">Female</div>
                                                                </div>
                                                            </div>
                                                            <div className="stardust-radio" >
                                                                <div className="stardust-radio-button">
                                                                    <div className="stardust-radio-button__outer-circle">
                                                                        <div className="stardust-radio-button__inner-circle">
                                                                            <input type="checkbox" style={{ display: "none" }} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="stardust-radio__content">
                                                                    <div className="stardust-radio__label">Other</div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="input-with-label">
                                            <div className="input-with-label__wrapper">
                                                <div className="input-with-label__label">
                                                    <label>Date of birth</label>
                                                </div>
                                                <div className="input-with-label__content">

                                                    <DatePicker selected={user && dob} onChange={date => ConvertDob(date)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="submit-profile">
                                            <button type="button" className="btn-submit" aria-disabled="false" onClick={() => handleSubmit()}>Save</button>
                                            {
                                                user && user.shopId ? <Link to="/banhang/order" type="button" className="btn-seller" aria-disabled="false">Change to Seller Channel</Link>
                                                    : <button to="/banhang/order" type="button" className="btn-seller" aria-disabled="false">Create Seller Channel</button>
                                            }
                                            {/* <Link to="/banhang/order" type="button" className="btn-seller" aria-disabled="false">Change to Seller Channel</Link>
                                            <button to="/banhang/order" type="button" className="btn-seller" aria-disabled="false">Create Seller Channel</button> */}

                                        </div>
                                    </div>
                                    <div className="profile-section__body-right">
                                        <div className="avatar-uploader">
                                            <div className="avatar-uploader__avatar">
                                                <div className="avatar-uploader__placeholder">
                                                    <svg enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0" className="profile-icon">
                                                        <g>
                                                            <circle cx="7.5" cy="4.5" fill="none" r="3.8" stroke-miterlimit="10"></circle>
                                                            <path d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="none" stroke-linecap="round" stroke-miterlimit="10"></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <input className="avatar-uploader__file-input" name="file" type="file"></input>
                                            <button type="button" className="btn-img" >Choose Photo</button>
                                            <div className="avatar-uploader__text-container">
                                                <div className="avatar-uploader__text">Maximum file size 1 MB</div>
                                                <div className="avatar-uploader__text">File format: .JPEG, .PNG</div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-section" style={phoneStatus ? { display: "flex" } : { display: "none" }}>
                                <div className="profile-section__header">
                                    <div className="profile-section__header-left">
                                        <div className="profile-section__header-title">Change Phone Number</div>
                                        <div className="profile-section__header-subtitle">Please enter new phone number.</div>
                                    </div>
                                </div>
                                <div className="phone-body">
                                    <div className="input-with-label" >
                                        <div className="input-with-label__wrapper">
                                            <div className="input-with-label__label">
                                                <label>Phone Number</label>
                                            </div>
                                            <div className="input-with-label__content">
                                                <div className="input-with-validator-wrapper" style={{ width: "280px" }}>
                                                    <div className="input-with-validator">
                                                        <input type="text" placeholder="" maxlength="255" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="submit-profile" style={{ paddingLeft: "350px" }}>
                                    <button type="button" className="btn-submit" aria-disabled="false">Save</button>
                                    <button type="button" className="btn-seller" aria-disabled="false">Back</button>
                                </div>
                            </div>
                            <div className="profile-section" style={mailStatus ? { display: "flex" } : { display: "none" }}>
                                <div className="profile-section__header">
                                    <div className="profile-section__header-left">
                                        <div className="profile-section__header-title">Change Email Address</div>
                                        <div className="profile-section__header-subtitle">Please enter a new email address.</div>
                                    </div>
                                </div>
                                <div className="phone-body">
                                    <div className="input-with-label" >
                                        <div className="input-with-label__wrapper">
                                            <div className="input-with-label__label">
                                                <label>Email Address</label>
                                            </div>
                                            <div className="input-with-label__content">
                                                <div className="input-with-validator-wrapper" style={{ width: "280px" }}>
                                                    <div className="input-with-validator">
                                                        <input type="text" placeholder="" maxlength="255" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="submit-profile" style={{ paddingLeft: "350px" }}>
                                    <button type="button" className="btn-submit" aria-disabled="false">Save</button>
                                    <button type="button" className="btn-seller" aria-disabled="false">Back</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}