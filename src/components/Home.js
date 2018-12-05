import React, { Component } from "react";
import "../css/Home.css";
import { connect } from "react-redux";

import { fetchCollection } from "../actions/fetchActions";

// import CollectionList from "./CollectionList";

class Home extends Component {
  handleSelect = e => {
    const contentType = e.target.value;
    this.props.fetchCollection(contentType);
  };

  collectionTypes = [
    "articles",
    "blog",
    "questions",
    "glossary",
    "states",
    "topics"
  ];

  capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

  render() {
    const storedContentType = this.props.healthGov.contentType;
    return (
      <main>
        <div className="menu">
          <div className="menu-inner">
            <select
              value={storedContentType ? storedContentType : ""}
              onChange={this.handleSelect}
            >
              {this.collectionTypes.map(option => (
                <option key={option} value={option}>
                  {this.capitalizeFirstLetter(option)}
                </option>
              ))}
            </select>
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
  fetchCollection: contentType => dispatch(fetchCollection(contentType))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
