import React from "react";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    FollowOrUnfollow,
    requestUsers,
    setCurrentFriendPageAC,
} from "../../Redux/Reducers/UsersReducer";
import {
    getFollowIsProgressing,
    getIsFetching,
    getPageSize
} from "../../Redux/Selectors/UsersSelector";
import Friends from "./Friends";

class FriendsContainer extends React.Component {
    componentDidMount() {
        let {pageSize,currentFriendPage} = this.props
        this.props.requestUsers(currentFriendPage,9,true)


    }
    onPageChanged = (p) => {
        let {pageSize} = this.props
        this.props.requestUsers(p,9, true)
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