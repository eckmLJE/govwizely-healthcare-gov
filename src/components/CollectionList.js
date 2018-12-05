import React from "react";
import "../css/CollectionList.css";

import CollectionItem from "./CollectionItem";

const CollectionList = props => {
  console.log(props.items);
  return (
    <ul>
      {props.items.map(item =>
        item ? <CollectionItem key={item.url} item={item} /> : null
      )}
    </ul>
  );
};

export default CollectionList;
