import axios from "./axios";

export async function receiveFriends() {
    console.log("getting receiveFriends");
    const { data } = await axios.get("/friendsdata");

    return { type: "RECEIVE_FRIENDS", connections: data };
}
// export async function acceptFriendRequest() {
//     let otherUserId = req.params.id;
//     axios.post("/friendship-with/'+ id").then(({ data }) => {
//         return {
//             type: "ACCEPT_FRIEND_REQUEST",
//             otherUserId
//         };
//     });
// }
// export async function unfriend() {
//     let otherUserId = req.params.id;
//     axios.post("/cancelfriendship" + otherUserId).then(({ data }) => {
//         return {
//             type: "UNFRIEND",
//             otherUserId
//         };
//     });
// }
