import { createSelector } from "reselect";
import { getFormValues } from "redux-form";

export const getAppState = state => state.app;

export const getTest = createSelector(getAppState, appState => appState.test);
