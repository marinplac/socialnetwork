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
    if (action.type == "ACCEPT_FRIEND_REQUEST") {
        const user = { ...state.user, bio: action.bio };
        return { ...state, user };
    }
    return state;
}
// if (action.type == "UNFRIEND") {
// }

// * conditionals for 3 action types: 'RECEIVE_FRIENDS', 'ACCEPT_FRIEND_REQUEST', 'UNFRIEND'