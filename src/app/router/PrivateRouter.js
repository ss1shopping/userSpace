import React from 'react';
import PropTypes from 'prop-types';
import {getStorage} from "../../_metronic/utils/utils"
import {useReducer,useDispatch,connect} from "react-redux"
import { withRouter, Route } from 'react-router-dom';
import {checkAuth} from "../store/ducks/authReducer";
import { authActions } from "../store/ducks/authReducer";
class PrivateRoute extends React.Component {
  componentDidMount () {
    const { user, checkAuth, history } = this.props;
    const accessToken = getStorage('token');

    if (accessToken && !user) {
      checkAuth(history);
      return;
    }

    if (!accessToken) {
      history.push("/signin");
    }
  }

  checkIfOnLoginPages = () => {
    const { location: { pathname } } = this.props;

    return pathname === "/signIn"
      || pathname === "/register";
      
  }

  render () {
    const { user, isPending } = this.props;

    if (!user) {
      if (!this.checkIfOnLoginPages()) {
        return null;
      }
    }

    return isPending ? (
       <Route {...this.props} />
     
    ) : (
      <>Loading...</>
    );
  }
}

PrivateRoute.propTypes = {
  user: PropTypes.object,
  isPending: PropTypes.bool.isRequired,
  checkAuth: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const withRouterRoute = withRouter(PrivateRoute);

const mapStateToProps = ({ authReducer: { user, isPending } }) => ({
  user,
  isPending,
});

const mapDispatchToprops = {
  checkAuth: authActions.checkAuth,
};

export default connect(mapStateToProps, mapDispatchToprops)(withRouterRoute);;