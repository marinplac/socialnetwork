import App from "./app";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import { reducer } from "./reducer";

const store = createStore(reducer, applyMiddleware(reduxPromise));

let elem = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(elem, document.getElementById("main"));
