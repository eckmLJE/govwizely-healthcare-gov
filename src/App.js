import React, { Component } from "react";
import "./App.css";

import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

// import Header from "./components/Header.js";
import Home from "./components/Home.js";
import DetailView from "./components/DetailView.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/:url" component={DetailView} />
        <Route exact path="/glossary/:url" component={DetailView} />
        <Route exact path="/blog/:url" component={DetailView} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  healthGov: state.healthGov
});

// const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(App)
);
