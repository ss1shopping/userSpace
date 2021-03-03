import React from 'react';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"
// import { ThemeProvider, LayoutSplashScreen } from "./_metronic";
import { LastLocationProvider } from "react-router-last-location";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "./app/scss/index.scss"
import Router from './app/router/Router';
export default function App({ store, persistor }) {
  return (

    <Provider store={store}>
      {/* <PersistGate persistor={persistor} loading={<LayoutSplashScreen />}>
            <React.Suspense fallback={<LayoutSplashScreen />}> */}
      <BrowserRouter>
        {/* <LastLocationProvider> */}
        {/* <ThemeProvider> */}
        <Router></Router>
        {/* </ThemeProvider> */}
        {/* </LastLocationProvider> */}
      </BrowserRouter>
      {/* </React.Suspense>
        </PersistGate> */}
    </Provider>
  );
}
//hello


