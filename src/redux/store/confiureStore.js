import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./../reducers";
import { watchPost } from "./../saga";

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const composeArgs = [applyMiddleware(sagaMiddleware)];
  if (window && window.__REDUX_DEVTOOLS_EXTENSION__) {
    composeArgs.push(window.__REDUX_DEVTOOLS_EXTENSION__());
  }

  const store = createStore(rootReducer, compose.apply(undefined, composeArgs));

  // sagaMiddleware.run(loginFlow);
  // sagaMiddleware.run(logActions);
  sagaMiddleware.run(watchPost);

  return store;
}
