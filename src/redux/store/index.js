import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "../reducers";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

const initialState = {};

const log = createLogger({ diff: true, collapsed: true });

const middleware = [thunk, log];

const enhancers = [];

const store = createStore(
      rootReducer(),
      initialState,
      compose(
            applyMiddleware(...middleware),
            ...enhancers,
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
                  window.__REDUX_DEVTOOLS_EXTENSION__()
      )
);
export default store;
