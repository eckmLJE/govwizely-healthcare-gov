const url = "https://www.healthcare.gov/";

export const fetchObject = postTitle => {
  return dispatch => {
    dispatch({ type: "START_FETCHING_OBJECT" });
    const objectUrl = url + postTitle + ".json";
    return fetch(objectUrl).then(res =>
      res.ok
        ? res.json().then(json => dispatch({ type: "SET_OBJECT", json }))
        : dispatch({ type: "FETCH_OBJECT_FAILED" })
    );
  };
};

export const fetchCollection = contentType => {
  return dispatch => {
    dispatch({ type: "START_FETCHING_COLLECTION", contentType });
    return fetch(url + "api/" + contentType + ".json").then(res =>
      res.ok
        ? res.json().then(json => dispatch({ type: "SET_COLLECTION", json }))
        : dispatch({ type: "FETCH_COLLECTION_FAILED" })
    );
  };
};
