import {
  legacy_createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { reducer as appReducer } from "./reducer";
import { reducer as authReducer } from "./auth/reducer";
const rootReducer = combineReducers({ authReducer, appReducer }); ;
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
export { store };
