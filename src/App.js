import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import { useRoutes } from "./routes";
import ScrollToTop from "./ScrollToTop";
import "./App.scss";
// import { statuses } from "./config";

const TITLE = "xWallet";

function App() {
  const store = useSelector((store) => store);
  console.log(store);
  const routes = useRoutes(
    localStorage.getItem("user") && localStorage.getItem("token")
  );
  return (
    <div className="App">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <ToastContainer />
      <Router>
        <ScrollToTop>{routes}</ScrollToTop>
      </Router>
      <a href="http://xwallet.herokuapp.com/api-docs/">doc</a>
    </div>
  );
}

export default App;
