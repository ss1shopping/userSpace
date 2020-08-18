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

    if (!accessToken) {
      history.push("/users/login");
    }
  }

  

  render () {
    const {  isPending } = this.props;

    
    return isPending ? (
      <>Loading...</>
    ) : (
      <Route {...this.props} />
    );
  }
}



const withRouterRoute = withRouter(PrivateRoute);

const mapStateToProps = ({ authReducer: {isPending } }) => ({
  
  isPending,
});



export default connect(mapStateToProps)(withRouterRoute);