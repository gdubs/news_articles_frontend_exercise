import * as constants from "../common/constants";

export function isLoading(is_loading) {
  return function (dispatch) {
    dispatch({
      type: constants.UIACTIVITY_IS_LOADING,
      payload: is_loading,
    });
  };
}
