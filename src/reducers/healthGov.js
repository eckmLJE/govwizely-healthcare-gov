const healthGov = (
  state = {
    index: [],
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
    default:
      return state;
  }
};

export default healthGov;
