import React from 'react'
import {Link} from "react-router-dom"
const ChangePasswordSuccesful = () => {
    return (
        <div className="changePasswordSuccessful">
        
        <div className="social-share">
            <div className="social-share--title">
                    <h3> Change Password Successful</h3>
            </div>
            <div className="social-share-alert">
                Change password successful
            </div>
          {/* <div className="social-share-item facebook">
          
            <span className="social-share-text">Go to Login</span>
          </div> */}
          <Link to="/users/login" className="social-share-item instagram">
            
            <span className="social-share-text">go to Login</span>
          </Link>
          {/* <div className="social-share-item twitter">
            <i className="fab fa-twitter social-share-icon"></i>
            <span className="social-share-text">Share this post on Twitter</span>
          </div> */}
        </div>
        </div>
    )
}

export default ChangePasswordSuccesful
