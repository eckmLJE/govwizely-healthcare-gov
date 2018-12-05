import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/DetailView.css";

import { fetchObject } from "../actions/fetchActions";

import DetailViewPanel from "./DetailViewPanel";

class DetailView extends Component {
  componentDidMount = () => {
    const url = this.props.match.url;
    this.props.fetchObject(url.slice(1, -1));
  };

  render() {
    const postObject = this.props.healthGov.postObject;
    return (
      <div className="detail-view">
        {postObject && <DetailViewPanel postObject={postObject} />}
      </div>
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
