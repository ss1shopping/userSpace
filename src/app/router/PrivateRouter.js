import React ,{useEffect}from 'react';

import {getStorage} from "../../_metronic/utils/utils"
import {useSelector,useDispatch,connect} from "react-redux"
import { withRouter, Route,Redirect } from 'react-router-dom';
import {checkAuth} from "../store/ducks/authReducer";
import { authActions } from "../store/ducks/authReducer";
class PrivateRoute extends React.Component {
  componentDidMount () {
    const {  history } = this.props;
    const accessToken = getStorage('token');
    const refreshToken=getStorage('refreshtoken')
    
    if (!accessToken && !refreshToken) {
      history.push("/users/login");
    }
    if(!accessToken && refreshToken){
      console.log(accessToken);
      console.log(refreshToken);
      this.props.fetchrefreshtoken(refreshToken)
    }
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

const mapStateToProps = ({ authReducer: {isPending,error } }) => ({
  error,
  isPending,
});

const mapDispatchToprops = {
  fetchrefreshtoken: authActions.refreshToken,
};

export default connect(mapStateToProps,mapDispatchToprops)(withRouterRoute);