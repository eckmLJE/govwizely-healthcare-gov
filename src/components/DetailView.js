import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchObject } from "../actions/fetchActions";

import DetailViewPanel from "./DetailViewPanel";

class DetailView extends Component {
  componentDidMount = () => {
    const url = this.props.match.params.url;
    this.props.fetchObject(url);
  };

  render() {
    const postObject = this.props.healthGov.postObject;
    return (
      <div>{postObject && <DetailViewPanel postObject={postObject} />}</div>
    );
  }
}

const mapStateToProps = state => ({
  healthGov: state.healthGov
});

const mapDispatchToProps = dispatch => ({
  fetchObject: postUrl => dispatch(fetchObject(postUrl))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailView);
