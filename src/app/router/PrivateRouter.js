import React from 'react';

import {getStorage} from "../../_metronic/utils/utils"
import {connect} from "react-redux"
import { withRouter, Route,Redirect } from 'react-router-dom';
// import {checkAuth} from "../store/ducks/authReducer";
import { authActions } from "../store/ducks/authReducer";
class PrivateRoute extends React.Component {
  constructor(props){  
    super(props);  
}  
  componentDidMount () {
    const {  history } = this.props;
    const accessToken = getStorage('token');
    const admin=getStorage("admin")
    console.log("admin",admin);
    const refreshToken=getStorage('refreshtoken')
    
    if (!accessToken && !refreshToken || admin!=="true" ) {
      history.push("/users/login");
    }
    if(!accessToken && refreshToken){
      console.log(accessToken);
      console.log(refreshToken);
      this.props.fetchrefreshtoken(refreshToken)
    }
    // if(admin!=="true"){
      
    //   history.push("/shop")
    // }
  }

  

  render () {
    const {  isPending } = this.props;

    
    return isPending ? (
    <div>please wait to refresh token</div>
    ) : (
      <Route {...this.props} />
    );
  }
}



const withRouterRoute = withRouter(PrivateRoute);

const mapStateToProps = ({ authReducer: {isPending,error ,user} }) => ({
  error,
  isPending,
  user
});

const mapDispatchToprops = {
  fetchrefreshtoken: authActions.refreshToken,

};

export default connect(mapStateToProps,mapDispatchToprops)(withRouterRoute);