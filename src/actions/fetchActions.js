const url = {
  objects: "https://www.healthcare.gov/:post-title.json",
  collections: "https://www.healthcare.gov/api/:content-type.json",
  index: "https://www.healthcare.gov/api/index.json"
};

export const fetchHealth = type => {
  console.log(type);
  return dispatch => {
    dispatch({ type: `START_FETCHING_${type}` });
    return fetch(url[type])
      .then(res => res.json())
      .then(console.log);
  };
};
