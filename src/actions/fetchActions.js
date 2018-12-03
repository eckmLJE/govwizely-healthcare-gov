const url = "https://www.healthcare.gov/";

export const fetchObjects = postTitle => {
  return dispatch => {
    dispatch({ type: "START_FETCHING_OBJECTS" });
    return fetch(url + postTitle + ".json")
      .then(res => res.json())
      .then(console.log);
  };
};

export const fetchCollections = contentType => {
  return dispatch => {
    dispatch({ type: "START_FETCHING_COLLECTIONS" });
    return fetch(url + "api/" + contentType + ".json")
      .then(res => res.json())
      .then(console.log);
  };
};

export const fetchIndex = () => {
  return dispatch => {
    dispatch({ type: "START_FETCHING_INDEX" });
    return fetch(url + "api/index.json").then(res => {
      res.ok
        ? res.json().then(json => {
            dispatch({ type: "SET_INDEX", json });
          })
        : console.log(res);
    });
  };
};
