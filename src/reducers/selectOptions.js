const selectOptions = (
  state = {
    primaryOption: "index",
    secondaryOption: null
  },
  action
) => {
  switch (action.type) {
    case "SET_PRIMARY_OPTION": {
      return { ...state, primaryOption: action.option };
    }
    case "SET_SECONDARY_OPTION": {
      return { ...state, secondaryOption: action.option };
    }
    case "RESET_OPTIONS": {
      return { ...state, primaryOption: null, secondaryOption: null };
    }
    default:
      return state;
  }
};

export default selectOptions;
