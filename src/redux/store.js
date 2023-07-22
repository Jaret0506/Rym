import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(rootReducer);
export default store;
