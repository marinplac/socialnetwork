import React from "react";
import { connect } from "react-redux";
import { receiveFriends, acceptFriendRequest, unfriend } from "./actions";

class Friends extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log("component DID mount!");
        this.props.dispatch(receiveFriends());
    }
    render() {
        console.log(this.props, "this is this.props");
        if (!this.props.friends) {
            return (
                <div className="waitasec">
                    Wait a sec!
                    <img
                        id="waitaseclogo"
                        src="https://media.giphy.com/media/d2jjuAZzDSVLZ5kI/source.gif"
                    />
                </div>
            );
        }
        return (
            <div id="thesepeople">
                <div>
                    {this.props.friends.map(poorfriend => {
                        console.log(poorfriend.firstname);
                        return (
                            <div id="friendinfriends" key={poorfriend.id}>
                                <img
                                    id="friendsimage"
                                    src={poorfriend.users_image}
                                />
                                <div id="friendsname">
                                    <p className="names">
                                        {poorfriend.firstname}
                                    </p>
                                    <p className="names">
                                        {poorfriend.lastname}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
const mapStateToProps = function(state) {
    console.log("state in mapsproosp", state);
    return { friends: state.friends };
};
export default connect(mapStateToProps)(Friends);
