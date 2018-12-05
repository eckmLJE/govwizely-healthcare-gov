const healthGov = (
  state = {
    contentType: null,
    collection: [],
    postObject: {},
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
    case "START_FETCHING_OBJECT": {
      return { ...state, fetching: true };
    }
    case "SET_OBJECT": {
      return { ...state, fetching: false, postObject: action.json };
    }
    case "FETCH_OBJECT_FAILED": {
      return { ...state, fetching: false };
    }
    default:
      return state;
  }
};

export default healthGov;
