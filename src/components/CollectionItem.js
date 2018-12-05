import React from "react";
import "../css/CollectionItem.css";

const CollectionItem = props => (
  <div className="collection-item">
    <li className="collection-item-inner">
      <div className="item-header">
        <h1>{props.item.title}</h1>
        <div className="detail-button">
          <button>View Detail</button>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: props.item.excerpt }} />
    </li>
  </div>
);

export default CollectionItem;
