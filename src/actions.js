import axios from "./axios";

export async function receiveFriends() {
    console.log("getting receiveFriends");
    const { data } = await axios.get("/friendsdata");

    return { type: "RECEIVE_FRIENDS", connections: data };
}
// export async function acceptFriendRequest(id) {
//     axios.post("/user/acceptfriendship/:id/json", id).then(({ data }) => {
//         return {
//             type: "ACCEPT_FRIEND_REQUEST",
//             id
//         };
//     });
// }
// export async function unfriend(id) {
//     axios.post("/user/cancelfriendship/:id/json" + id).then(({ data }) => {
//         return {
//             type: "UNFRIEND",
//             id
//         };
//     });
// }
