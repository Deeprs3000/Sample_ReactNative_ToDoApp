import { combineReducers, applyMiddleware, compose } from "redux";
import { createStore } from "redux";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import ListReducer from "../reducers/ListReducer";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { persistStore, persistReducer } from "redux-persist";
const rootReducer = combineReducers({
  ListReducer: ListReducer
});

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2
};
const enhancer = compose(applyMiddleware(thunkMiddleware, logger));
const pReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(pReducer, enhancer);
export const persistor = persistStore(store);
