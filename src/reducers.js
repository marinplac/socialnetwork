export default function(state = {}, action) {
    if (action.type == 'RECEIVE_FRIENDS') {
        return Object.assign({}, state, {
            friendshipacceptedorsthsimilar: true
        });
    }
 if (action.type == "ACCEPT_FRIEND_REQUEST") {
        const user = { ...state.user, bio: action.bio };
        return { ...state, user };
    }
    return state;
}
if  (action.type=="UNFRIEND"){
    
}

}





// * conditionals for 3 action types: 'RECEIVE_FRIENDS', 'ACCEPT_FRIEND_REQUEST', 'UNFRIEND'
