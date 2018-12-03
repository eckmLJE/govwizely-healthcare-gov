import React, { Component } from "react";
import "../css/Home.css";
import { connect } from "react-redux";

import { fetchHealth } from "../actions/fetchActions";

class Home extends Component {
  handleFetch = e => {
    e.preventDefault();
    const name = e.target.getAttribute("name");
    if (name) this.props.fetchHealth(name);
  };

  render() {
    return (
      <main>
        <h1>Home</h1>
        <div onClick={this.handleFetch} className="fetch-buttons">
          <button name="objects">Objects</button>
          <button name="collections">Collections</button>
          <button name="index">Index</button>
        </div>
      </main>
    );
  }
}

// const mapStateToProps = state => ({
//   healthGov: state.healthGov
// });

const mapDispatchToProps = dispatch => ({
  fetchHealth: type => dispatch(fetchHealth(type))
});

export default connect(
  null,
  mapDispatchToProps
)(Home);
