const healthGov = (
  state = {
    index: [],
    collection: [],
    fetching: false
  },
  action
) => {
  switch (action.type) {
    case "START_FETCHING_INDEX": {
      return { ...state, fetching: true };
    }
    case "SET_INDEX": {
      return { ...state, fetching: false, index: action.json };
    }
    case "START_FETCHING_COLLECTIONS": {
      return { ...state, fetching: true };
    }
    case "SET_COLLECTIONS": {
      return { ...state, fetching: false, collection: action.json };
    }
    default:
      return state;
  }
};

export default healthGov;
