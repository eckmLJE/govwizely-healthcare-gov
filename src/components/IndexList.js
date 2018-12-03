import React from "react";
import "../css/IndexList.css";

import IndexItem from "./IndexItem";

const IndexList = props => (
  <ul>{props.items.map(item => (item ? <IndexItem item={item} /> : null))}</ul>
);

export default IndexList;
