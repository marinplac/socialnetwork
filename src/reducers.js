// import { connect } from 'react-redux';
// class Chat extends React.Component {
// render(){
//     return(
//         this.props.chatMessages
//     )
// }
// }
// export default connect(mapStateToProps)(Chat)
//
// const mapStateToProps = state => {
//     //state refers to global redux state
//     return {
//         chatMessages: state.displayMessages
//     }
// }

export default function(state = {}, action) {
    if (action.type == "RECEIVE_FRIENDS") {
        return Object.assign({}, state, {
            friends: action.connections
        });
    }
    return state;
}
//     else if (action.type == "ACCEPT_FRIEND_REQUEST") {
//         const user = { ...state.user, bio: action.bio };
//         return { ...state, user };
//     }
//     else (action.type == "UNFRIEND") {
//         userId == action.id;
//     }
//     return state;
// }
