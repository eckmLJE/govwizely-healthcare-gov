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
  console.log(props.items);
  const items = filterItems(props.items);
  return (
    <ul>
      {items.map(item =>
        item ? <CollectionItem key={item.url} item={item} /> : null
      )}
    </ul>
  );
};

export default CollectionList;
