import React from "react";
import ReactDOM from "react-dom";

import Welcome from "./welcome";
import App from "./app";

import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import reducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

// const store = createStore(reducer, applyMiddleware(reduxPromise));

// import { init } from "./socket";

// import * as io from 'socket.io-client';
// const socket = io.connect();
// socket.on('hey', data =>{
//     console.log(data);
// });

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(reduxPromise))
);

let elem;

if (location.pathname == "/welcome") {
    // console.log("do something");
    elem = <Welcome />;
} else {
    // console.log("do something else");
    elem = (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

ReactDOM.render(elem, document.querySelector("main"));
