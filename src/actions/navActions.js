import { push, goBack } from "connected-react-router";

export const navToObject = url => {
  return dispatch => {
    dispatch(push(`/detail/${url.slice(1)}`));
  };
};

export const navToHome = () => {
  return dispatch => {
    dispatch(goBack());
  };
};
