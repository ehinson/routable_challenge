import { createActions } from "redux-actions";

export const { setTest, addTest, removeTest, updateTest } = createActions({
  SET_TEST: (values = []) => ({ values }),
  ADD_TEST: (value = 1) => ({ value }),
  REMOVE_TEST: (index = 0) => ({ index }),
  UPDATE_TEST: (index = 0, value = 1) => ({ index, value })
});
