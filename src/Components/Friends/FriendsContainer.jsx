import React from "react";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    FollowOrUnfollow,
    requestUsers,
    setCurrentFriendPageAC,
    setCurrentPageAC
} from "../../Redux/Reducers/UsersReducer";
import {
    getFollowIsProgressing, getFriends,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsersSuper
} from "../../Redux/Selectors/UsersSelector";
import Friends from "./Friends";

class FriendsContainer extends React.Component {
    componentDidMount() {
        let {pageSize,currentFriendPage} = this.props
        if (this.props.friends.length === 0) {
            this.props.requestUsers(currentFriendPage,pageSize,true)
        }

    }
    onPageChanged = (p) => {
        let {pageSize} = this.props
        this.props.requestUsers(p,pageSize, true)
    }

    render() {
        return (
            <div>
                <div><Friends {...this.props} onPageChanged={this.onPageChanged}/></div>
            </div>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        friends: state.UsersPage.friends,
        pageSize: getPageSize(state),
        totalUsersCount: state.UsersPage.totalFriendsCount,
        isFetching: getIsFetching(state),
        followIsProgressing: getFollowIsProgressing(state),
        currentFriendPage: state.UsersPage.currentFriendPage
    }
}
export default  compose(
    connect(mapStateToProps, {requestUsers, FollowOrUnfollow,setCurrentFriendPageAC}),
    withAuthRedirect
)(FriendsContainer)