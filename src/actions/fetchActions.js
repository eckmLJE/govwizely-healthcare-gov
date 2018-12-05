const url = "https://www.healthcare.gov/";

const fetchObjects = postTitle => {
  return dispatch => {
    dispatch({ type: "START_FETCHING_OBJECTS" });
    return fetch(url + postTitle + ".json")
      .then(res => res.json())
      .then(console.log);
  };
};

const fetchCollections = contentType => {
  return dispatch => {
    dispatch({ type: "START_FETCHING_COLLECTIONS" });
    return fetch(url + "api/" + contentType + ".json").then(res => {
      res.ok
        ? res.json().then(json => {
            dispatch({ type: "SET_COLLECTIONS", json });
          })
        : console.log(res);
    });
  };
};

const fetchIndex = () => {
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

export const setIndex = () => {
  fetchIndex();
  return {
    type: "SET_PRIMARY_OPTION",
    option: "index"
  };
};

export const setCollectionsPrimary = () => ({
  type: "SET_PRIMARY_ACTION",
  option: "COLLECTIONS"
});
