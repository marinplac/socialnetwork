import * as io from "socket-io-client";
import { onLineUsers, userJoined, userLeft } from "./actions";
export let socket;
export function init(store) {
    if (!socket) {
        socket = io.connect();
        socket.on("onLineUsers", data => {
            store.dispatch(onLineUsers(users));
        });
        socket.on("userJoined", data => {});
        socket.on("userLeft", data => {});
    }
}
