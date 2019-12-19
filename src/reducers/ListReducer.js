import { LIST, ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../constants/types";

const INITIAL_STATE = {
  list: []
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO.REQUEST:
      let arr = state.list;
      arr.push(action.todo);
      return {
        ...state,
        list: arr
      };

    case DELETE_TODO.REQUEST:
      let arr1 = state.list;

      arr1.filter((item, index) => {
        if (item.id === action.id) {
          arr1.splice(index, 1);
        } else {
          return null;
        }
      });

      return {
        ...state
      };

    case UPDATE_TODO.REQUEST:
      let arr2 = state.list;

      arr2.filter((item, index) => {
        if (item.id === action.id) {
          item.status = !item.status;
        } else {
          return null;
        }
      });

      return {
        ...state
      };

    default:
      return state;
  }
};
