const healthGov = (
  state = {
    contentType: null,
    collection: [],
    object: {},
    fetching: false
  },
  action
) => {
  switch (action.type) {
    case "START_FETCHING_COLLECTION": {
      return { ...state, fetching: true, contentType: action.contentType };
    }
    case "SET_COLLECTION": {
      return { ...state, fetching: false, collection: action.json };
    }
    case "FETCH_COLLECTION_FAILED": {
      return { ...state, fetching: false, contentType: null };
    }
    default:
      return state;
  }
};

export default healthGov;
