import React from "react";
import "../css/IndexItem.css";

const IndexItem = props => (
  <li>
    <button>View Detail</button>
    <h1>{props.item.title}</h1>
    <p>{props.item.bite}</p>
  </li>
);

export default IndexItem;
