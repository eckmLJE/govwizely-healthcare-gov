import React, { Component } from "react";
import "../css/Home.css";
import { connect } from "react-redux";

import { fetchObjects } from "../actions/fetchActions";
import { fetchCollections } from "../actions/fetchActions";
import { fetchIndex } from "../actions/fetchActions";

import IndexList from "./IndexList";

class Home extends Component {
  handleFetch = e => {
    e.preventDefault();
    const name = e.target.value;
    switch (name) {
      case "objects": {
        this.props.fetchObjects();
        break;
      }
      case "collections": {
        this.props.fetchCollections("articles");
        break;
      }
      case "index": {
        this.props.fetchIndex();
        break;
      }
      default: {
        console.log("default reached");
      }
    }
  };

  render() {
    const index = this.props.healthGov.index;
    return (
      <main>
        <div className="menu">
          <div className="menu-inner">
            <select onChange={this.handleFetch}>
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
  healthGov: state.healthGov
});

const mapDispatchToProps = dispatch => ({
  fetchObjects: postTitle => dispatch(fetchObjects(postTitle)),
  fetchCollections: contentType => dispatch(fetchCollections(contentType)),
  fetchIndex: () => dispatch(fetchIndex())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
