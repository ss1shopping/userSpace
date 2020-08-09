import React, {Component} from 'react';
import * as ReactBootStrap from "react-bootstrap"
import { useSelector } from 'react-redux';


const LoadingMessage =()=> {

  return (
    <div className="splash-screen">
      Wait a moment while we load your app.
      <div className="spinner"><ReactBootStrap.Spinner animation="border"></ReactBootStrap.Spinner></div>
    </div>
  );
}

function withSplashScreen(WrappedComponent) {
   class newComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    async componentDidMount() {
      try {
        
       
        setTimeout(() => {
          console.log(this.state.loading);
           this.setState({
            loading: false,
          });
          
        }, 1500)
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
        });
      }
    }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return LoadingMessage();

      // otherwise, show the desired route
      return <WrappedComponent />;
    }
  };
  return newComponent
}

export default withSplashScreen;