import React, { Component } from "react";
import { connect } from "react-redux";
import "../css/DetailViewPanel.css";

import { navToHome } from "../actions/navActions";

class DetailViewPanel extends Component {
  renderPostByType = () => {
    const postObject = this.props.postObject;
    if (postObject.type === "article") return this.renderArticle(postObject);
  };

  capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

  renderArticle = postObject => (
    <div>
      <h1>{postObject.title}</h1>
      <div className="post-detail">
        <p>
          <span>Topic:</span> {postObject.page_topic}
        </p>
        <p>
          <span>Lifecycle:</span> {postObject.page_lifecycle}
        </p>
        <p>
          <span>Audience:</span> {postObject.page_audience}
        </p>
        <p>
          <span>Category:</span> {postObject.page_category}
        </p>
      </div>
      <div
        className="detail-content"
        dangerouslySetInnerHTML={{ __html: postObject.content }}
      />
    </div>
  );

  render() {
    return (
      <div className="detail-view-panel">
        <div className="detail-view-panel-inner">
          <button onClick={this.props.navToHome}>{"<< "}BACK HOME</button>
          <div className="detail-header">{this.renderPostByType()}</div>

          <div className="home-button" />
        </div>
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
