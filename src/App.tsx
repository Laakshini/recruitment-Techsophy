import React from "react";
import "./App.css";
import store from "./redux/Store";
import { Provider } from "react-redux";
import Wrapper from "./pages/Wrapper";
import Navigation from "./Navigator";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import Login from "./pages/authentication";
import RenderOnAuth from "./pages/RenderOnAuth";

const App = () => {
  return (
    <div>
      <Router>
        {/* <ThemeProvider theme={INITIAL_THEME}> */}
        <Provider store={store}>
          <Navigation />
          {/* Navigation component contains the routing structure of the application. */}
        </Provider>
        {/* </ThemeProvider> */}
      </Router>
    </div>
  );
};

// RenderOnAuthenticated is a component that renders its children only when the user is authenticated.

export default App;
