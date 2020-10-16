import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks"//"react-apollo";
import App from "./containers/App";
import client from "./utils/ApolloClient";
import { BrowserRouter as Router } from "react-router-dom";
import "./style.css"

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
  </Router>,
  document.getElementById("root")
);