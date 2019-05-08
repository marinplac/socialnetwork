// import React from "react";
// import { connect } from "reeact-redux";
// import { socket } from "./socket";
//
// class Chat extends React.Component {
//     constructor() {
//         super();
//
//         }
//         handleInput(e) {
//             if (e.which === 13) {
//                 console.log('this is handleinput!');
//                 var newChat = e.target.value;
//                 socket.emit('chatMessage', newChat);
//
//             }
//
//     }
//     componentDidUpdate(){
//         this.myDiv.scrollTop = '100px';
//     }
//     render() {
//         return (
//             <div>
//                 <h1>chat!</h1>
//                 <div className = "chats-container" ref={
//                     chatsContainer => (this.myDiv = chatsContainer)
//                 }>
//                 <p>chat chat</p>
//                 <p>chat chat</p>
//                 <p>chat chat</p>
//                 <p>chat chat</p>
//                 <p>chat chat</p>
//                 </div>
//                 <textarea onKeyDown = { this.handleInput } />
//             </div>
//         );
//     }
//     const mapStateToProps = state => {
//         return{
//
//         }
//     }
// }
// export default connect(mapStateToProps)(Chat);
