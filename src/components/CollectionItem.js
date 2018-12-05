import React from "react";
import "../css/CollectionItem.css";

const CollectionItem = props => (
  <div className="collection-item">
    <li className="collection-item-inner">
      <button>View Detail</button>
      <h1>{props.item.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.item.excerpt }} />
    </li>
  </div>
);

export default CollectionItem;
