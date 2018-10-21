import ActionTypes from './../constants/ActionTypes';

export const selectPreparation = (disasterType, index) => (dispatch) => {
  dispatch({
      type : ActionTypes.SELECT_PREPARATION,
      payload: {disasterType, index}
  });
}

export const selectBefore = (disasterType, index) => (dispatch) => {
  dispatch({
      type : ActionTypes.SELECT_BEFORE,
      payload: {disasterType, index}
  });
}

export const selectDuring = (disasterType, index) => (dispatch) => {
  dispatch({
      type : ActionTypes.SELECT_DURING,
      payload: {disasterType, index}
  });
}

export const selectAfter = (disasterType, index) => (dispatch) => {
  dispatch({
      type : ActionTypes.SELECT_AFTER,
      payload: {disasterType, index}
  });
}

export const removePreparation = (disasterType, index) => (dispatch) => {
  dispatch({
      type : ActionTypes.REMOVE_PREPARATION,
      payload: {disasterType, index}
  });
}

export const removeBefore = (disasterType, index) => (dispatch) => {
  dispatch({
      type : ActionTypes.REMOVE_BEFORE,
      payload: {disasterType, index}
  });
}

export const removeDuring = (disasterType, index) => (dispatch) => {
  dispatch({
      type : ActionTypes.REMOVE_DURING,
      payload: {disasterType, index}
  });
}

export const removeAfter = (disasterType, index) => (dispatch) => {
  dispatch({
      type : ActionTypes.REMOVE_AFTER,
      payload: {disasterType, index}
  });
}

export const addPreparation = (disasterType, description) => (dispatch) => {
  dispatch({
      type : ActionTypes.ADD_PREPARATION,
      payload: {disasterType, description}
  });
}

export const addBefore = (disasterType, description) => (dispatch) => {
  dispatch({
      type : ActionTypes.ADD_BEFORE,
      payload: {disasterType, description}
  });
}

export const addDuring = (disasterType, description) => (dispatch) => {
  dispatch({
      type : ActionTypes.ADD_DURING,
      payload: {disasterType, description}
  });
}

export const addAfter = (disasterType, description) => (dispatch) => {
  dispatch({
      type : ActionTypes.ADD_AFTER,
      payload: {disasterType, description}
  });
}

export const setDisasterType = (disasterType) => (dispatch) => {
  dispatch({
      type : ActionTypes.SET_DISASTER_TYPE,
      payload: {disasterType}
  });
}
