import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import DefaultLayout from '../../app/layout/Defaultlayout'
import { authActions } from '../../app/store/ducks/authReducer'
import DatePicker from "react-datepicker";
export const UserProfile = () => {
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
                                                        <div className="input-with-label__input-text">{user && user.email}</div>
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
                                                        <div className="input-with-label__input-text">{user && user.phoneNumber}</div>
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
                                                            <input type="text" placeholder="" maxlength="255" defaultValue={user && user.shopId.name} onChange={(e) => setShopName(e.target.value)} />
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