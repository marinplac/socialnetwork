import axios from "./axios";

export function receiveFriends() {
    axios.get("/api/getfriends").then(({ data }) => {
        console.log(data, "made it!");
        return { type: "RECEIVE_FRIENDS", connections: data };
    });
}
export function acceptFriendRequest() {
    let otherUserId = req.params.id;
    axios.post("/friendship-with/'+ id").then(({ data }) => {
        return {
            type: "ACCEPT_FRIEND_REQUEST",
            otherUserId
        };
    });
}
export function unfriend() {
    let otherUserId = req.params.id;
    axios.post("/cancelfriendship" + otherUserId).then(({ data }) => {
        return {
            type: "UNFRIEND",
            otherUserId
        };
    });
}
