import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Welcome from "./welcome";
import App from "./app";

import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import reducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(reduxPromise))
);

// import { getSocket } from "./socket";

// import * as io from 'socket.io-client';
// const socket = io.connect();
// socket.on('hey', data =>{
//     console.log(data);
// });

let elem;

if (location.pathname == "/welcome") {
    elem = <Welcome />;
} else {
    elem = (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

ReactDOM.render(elem, document.querySelector("main"));
