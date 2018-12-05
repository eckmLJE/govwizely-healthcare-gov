import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/DetailViewPanel.css";

import { navToHome } from "../actions/navActions";

class DetailViewPanel extends Component {
  renderPostByType = () => {
    const postObject = this.props.postObject;
    if (postObject.type === "article") return this.renderArticle(postObject);
  };

  renderArticle = postObject => (
    <div>
      <h1>{postObject.title}</h1>
      <p>{postObject.type}</p>
      <p>{postObject.page_topic}</p>
      <p>{postObject.page_lifecycle}</p>
      <p>{postObject.page_audience}</p>
      <div
        className="detail-content"
        dangerouslySetInnerHTML={{ __html: postObject.content }}
      />
    </div>
  );

  render() {
    return (
      <div className="detail-view-panel">
        <button onClick={this.props.navToHome}>Back Home</button>
        <div className="detail-header">{this.renderPostByType()}</div>

        <div className="home-button" />
      </div>
    );
  }
}

// const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  navToHome: () => dispatch(navToHome())
});

export default connect(
  null,
  mapDispatchToProps
)(DetailViewPanel);
