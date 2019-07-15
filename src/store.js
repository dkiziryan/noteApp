import { initialState, noteReducer } from "./redux/reducers";
import { createStore, applyMiddleware, compose } from "redux";
import { createLogicMiddleware } from "redux-logic";
import fetchNotes from "./logic";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logicMiddleware = createLogicMiddleware(fetchNotes);
const middleware = applyMiddleware(logicMiddleware);

const store = createStore(
  noteReducer,
  initialState,
  composeEnhancers(middleware)
);

export default store;
