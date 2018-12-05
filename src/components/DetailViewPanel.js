import React from "react";
import { connect } from "react-redux";

import { navToHome } from "../actions/navActions";

const DetailViewPanel = props => (
  <div className="detail-view-panel">
    <div>{props.postObject.title}</div>
    <div className="home-button">
      <button onClick={props.navToHome}>Back Home</button>
    </div>
  </div>
);

// const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  navToHome: () => dispatch(navToHome())
});

export default connect(
  null,
  mapDispatchToProps
)(DetailViewPanel);
