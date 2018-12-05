import React from "react";
import "../css/CollectionItem.css";

const CollectionItem = props => (
  <li>
    <button>View Detail</button>
    <h1>{props.item.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: props.item.excerpt }} />
  </li>
);

export default CollectionItem;
