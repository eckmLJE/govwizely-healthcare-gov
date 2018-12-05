import React from "react";
import "../css/CollectionList.css";

import CollectionItem from "./CollectionItem";

const filterEmpty = collection => collection.filter(item => item);

const filterEnglish = collection =>
  collection.length
    ? collection.filter(item => !item.categories.includes("es"))
    : collection;

const filterItems = collection => {
  const noEmpty = filterEmpty(collection);
  return filterEnglish(noEmpty);
};

const CollectionList = props => {
  const items = filterItems(props.items);
  return (
    <ul>
      {items.map((item, i) =>
        item ? <CollectionItem key={i} item={item} /> : null
      )}
    </ul>
  );
};

export default CollectionList;
