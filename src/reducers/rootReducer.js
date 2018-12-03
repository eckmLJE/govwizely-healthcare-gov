import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import healthGov from "./healthGov";

export default history =>
  combineReducers({
    router: connectRouter(history),
    healthGov: healthGov
  });
