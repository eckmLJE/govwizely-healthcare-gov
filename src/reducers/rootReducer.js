import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import healthGov from "./healthGov";
import selectOptions from "./selectOptions";

export default history =>
  combineReducers({
    router: connectRouter(history),
    healthGov: healthGov,
    selectOptions: selectOptions
  });
