const url = "https://www.healthcare.gov/";

export const fetchObject = postTitle => {
  return dispatch => {
    dispatch({ type: "START_FETCHING_OBJECTS" });
    return fetch(url + postTitle + ".json")
      .then(res => res.json())
      .then(console.log);
  };
};

export const fetchCollection = contentType => {
  return dispatch => {
    dispatch({ type: "START_FETCHING_COLLECTION", contentType });
    return fetch(url + "api/" + contentType + ".json").then(res => {
      res.ok
        ? res.json().then(json => {
            dispatch({ type: "SET_COLLECTION", json });
          })
        : dispatch({ type: "FETCH_COLLECTION_FAILED" });
    });
  };
};
