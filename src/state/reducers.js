import produce from "immer";
import { handleActions } from "redux-actions";

import { setTest, addTest, removeTest, updateTest } from "./actions";

const initialState = {
  test: []
};

const reducer = handleActions(
  {
    [setTest]: produce((draft, { payload: { values } }) => {
      draft["test"] = values;
    }),
    [addTest]: produce((draft, { payload: { value } }) => {
      draft.test.concat(value);
    }),
    [removeTest]: produce((draft, { payload: { index } }) => {
      draft.test.splice(index, 1);
    }),
    [updateTest]: produce((draft, { payload: { value, index } }) => {
      draft.test[index] = value;
    })
  },
  initialState
);

export default reducer;
