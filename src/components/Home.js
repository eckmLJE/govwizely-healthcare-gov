import React, { Component } from "react";
import "../css/Home.css";
import { connect } from "react-redux";

import { setIndex } from "../actions/fetchActions";

import IndexList from "./IndexList";

class Home extends Component {
  handleSelect = e => {
    e.preventDefault();
    const name = e.target.value;
    if (name === "index") this.props.setIndex();
  };

  render() {
    const index = this.props.healthGov.index;
    return (
      <main>
        <div className="menu">
          <div className="menu-inner">
            <select
              value={this.props.selectOptions.mainOption}
              onChange={this.handleSelect}
            >
              <option value="select">Please Select Below...</option>
              <option value="objects">Objects</option>
              <option value="collections">Collections</option>
              <option value="index">Index</option>
            </select>
          </div>
        </div>
        <div className="index-list">
          <div className="index-list-inner">
            {!!index.length && <IndexList items={index} />}
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  healthGov: state.healthGov,
  selectOptions: state.selectOptions
});

const mapDispatchToProps = dispatch => ({
  setIndex: () => dispatch(setIndex())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
