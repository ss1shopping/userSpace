import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DefaultLayout from '../../app/layout/Defaultlayout'
import { authActions, authReducer } from '../../app/store/ducks/authReducer'


export const Address = () => {
    const dispatch = useDispatch()

    const user = useSelector(state => state.authReducer.user)
    const [listAddress, setlistAddress] = useState([])
    const [address, setAddress] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [city, setCity] = useState()
    const [district, setDistrict] = useState()
    const [state, setState] = useState()
    const [editAddress, seteditAddress] = useState()
    const [numberInList, setNumberInList] = useState()
    let [addressStatus, setAddressStatus] = useState(false)
    const [AddOredit, setAddOredit] = useState(false)
    const handleAddAddress = () => {
        setAddOredit(true)
        setAddressStatus(!addressStatus)
        setlistAddress(user.addresses)
    }
    const handleAddress = () => {
        if (addressStatus) {
            setAddressStatus(!addressStatus)
            setlistAddress(user.addresses)
        } else {

            setAddressStatus(!addressStatus)
            setlistAddress(user.addresses)
        }
    }
    const handleChooseEdit = (value, i) => {
        seteditAddress(value)
        setAddress(value.address)
        setPhoneNumber(value.phoneNumber)
        setCity(value.city)
        setDistrict(value.district)
        setState(value.state)
        setNumberInList(i)

        setAddressStatus(!addressStatus)
        setlistAddress(user.addresses)
    }

    const handleSubmit = () => {
        let addressconcat = `${address},${district}, ${state},${city}`;
        let neweditObject = {
            address: addressconcat, district, state, city, phoneNumber
        }
        if (AddOredit) {
            listAddress.push(neweditObject)
        } else {

            listAddress[numberInList] = neweditObject
        }
        console.log(listAddress);
        dispatch(authActions.updateUser(user._id, null, null, null, null, null, listAddress, null, null))
        setAddressStatus(!addressStatus)
        setCity("")
        setDistrict("")
        setAddress("")
        setPhoneNumber("")
        seteditAddress("")
        setAddOredit(false)
        setNumberInList("")
    }
    useEffect(() => {
        dispatch(authActions.currentUser())


    }, [])
    useEffect(() => {

    }, [addressStatus])
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
                                <div className="user-page-brief__username">{user && user.lastname}</div>
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
                                        <button className="btn-address" onClick={() => handleAddAddress()}>
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
                                    {user && user.addresses.map((v, i) => {
                                        return (


                                            <div className="address-card">
                                                <div className="address-display__left">
                                                    <div className="address-display__field-container address-display__field-container--name">
                                                        <div className="address-display__field-label">Full Name</div>
                                                        <div className="address-display__field-content">
                                                            <span className="address-display__name-text">{user && user.lastname}</span>
                                                            {i === 0 ? <div className="bacc-default-badge">Default</div> : ""}

                                                        </div>
                                                    </div>
                                                    <div className="address-display__field-container">
                                                        <div className="address-display__field-label">Phone Number</div>
                                                        <div className="address-display__field-content">{v && v.phoneNumber}</div>
                                                    </div>
                                                    <div className="address-display__field-container address-display__field-container__address">
                                                        <div className="address-display__field-label">Address</div>
                                                        <div className="address-display__field-content">
                                                            <span>{v.state}
                                                                <br />
                                                                {v.district}
                                                                <br />
                                                                {v.city}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="address-card__buttons">
                                                    <div className="address-card__button-group">
                                                        <button className="btn-change" onClick={() => handleChooseEdit(v, i)}>Edit</button>
                                                        <button className="btn-change">Delete</button>
                                                    </div>
                                                    <div className="address-card__button-group">
                                                        <button type="button" className="btn-default btn-default--disabled" aria-disabled="true">Set as default</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={addressStatus ? { display: "block" } : { display: "none" }}>
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
                                        {/* <div className="address-modal__form_input">
                                            <div className="address-input">
                                                <div className="address-input__inner">
                                                    <input className="address-input__content" type="text" placeholder="Full Name" maxlength="64" value="" />
                                                </div>
                                                <div></div>
                                            </div>
                                        </div> */}
                                        <div className="address-modal__form_input">
                                            <div className="address-input">
                                                <div className="address-input__inner"><input className="address-input__content" type="text" placeholder="Phone Number" defaultValue={editAddress && editAddress.phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} /></div>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className="address-modal__form_input">
                                            <div className="address-input">
                                                <div className="address-input__inner">
                                                    <input className="address-input__content" type="text" placeholder="City" maxlength="64" defaultValue={editAddress && editAddress.city} onChange={(e) => setCity(e.target.value)} />
                                                </div>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className="address-modal__form_input">
                                            <div className="address-input">
                                                <div className="address-input__inner"><input className="address-input__content" type="text" placeholder="District" defaultValue={editAddress && editAddress.district} onChange={(e) => setDistrict(e.target.value)} /></div>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className="address-modal__form_input">
                                            <div className="address-input">
                                                <div className="address-input__inner"><input className="address-input__content" type="text" placeholder="State" defaultValue={editAddress && editAddress.address} onChange={(e) => setState(e.target.value)} /></div>
                                                <div></div>
                                            </div>
                                        </div>
                                        <div className="address-modal__form_input">
                                            <div className="address-input">
                                                <div className="address-input__inner"><input className="address-input__content" type="text" placeholder="Street, Building..." maxlength="128" onChange={(e) => setAddress(e.target.value)} /></div>
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
                                    <button className="cancel-btn" onClick={() => setAddressStatus(false)}>Trở Lại</button>
                                    <button type="button" className="btn-submit" onClick={() => handleSubmit()}>Hoàn thành</button></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="popup-background"></div>
            </div>

        </DefaultLayout>
    )
}