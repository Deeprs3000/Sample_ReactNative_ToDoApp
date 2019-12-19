import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../constants/types";

export const addTodo = data => {
  return dispatch => {
    dispatch({
      type: ADD_TODO.REQUEST,
      todo: data
    });
  };
};

export const deleteTodo = id => {
  return dispatch => {
    dispatch({
      type: DELETE_TODO.REQUEST,
      id: id
    });
  };
};

export const changeStatus = id => {
  return dispatch => {
    dispatch({
      type: UPDATE_TODO.REQUEST,
      id: id
    });
  };
};
