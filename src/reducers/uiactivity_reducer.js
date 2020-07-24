import * as constants from "../common/constants";

function reducer(
  state = {
    is_loading_next: false,
  },
  action
) {
  switch (action.type) {
    case constants.UIACTIVITY_IS_LOADING: {
      return {
        ...state,
        is_loading_next: action.payload,
      };
    }
    default:
      return state;
  }
}

export default reducer;
