import React from "react";
import { connect } from "react-redux";
import "../css/CollectionItem.css";

import { navToObject } from "../actions/navActions";

const CollectionItem = props => (
  <div className="collection-item">
    <li className="collection-item-inner">
      <div className="item-header">
        <h1>{props.item.title}</h1>
        <div className="detail-button-container">
          <div className="detail-button">
            <button onClick={e => props.navToObject(props.item.url)}>
              VIEW DETAIL{" >>"}
            </button>
          </div>
        </div>
      </div>
      <p>{props.item.bite}</p>
    </li>
  </div>
);

const mapStateToProps = state => ({
  healthGov: state.healthGov
});

const mapDispatchToProps = dispatch => ({
  navToObject: url => dispatch(navToObject(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionItem);
