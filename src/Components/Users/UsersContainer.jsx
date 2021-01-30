import React from "react";
import {connect} from "react-redux";
import {
    requestUsers,
  FollowOrUnfollow
} from "../../Redux/Reducers/UsersReducer";
import Users from "./Users";
import {compose} from "redux";
import {
     getFollowIsProgressing, getIsFetching,
    getPageSize,
    getTotalUsersCount,
   getUsersSuper
} from "../../Redux/Selectors/UsersSelector";



class UsersContainer extends React.Component {
    componentDidMount() {
        let {currentPage, pageSize} = this.props
        if (this.props.users.length === 0) {
            this.props.requestUsers(currentPage,pageSize)
        }
    }

    onPageChanged = (p) => {
        let {pageSize} = this.props
        this.props.requestUsers(p,pageSize)
    }


    render() {
        return <>
                <Users {...this.props } onPageChanged={this.onPageChanged}
                       changeSizeToRight={this.changeSizeToRight}
                       changeSizeToLeft = {this.changeSizeToLeft}
                       isFetching = {this.props.isFetching}
                />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSuper(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        isFetching: getIsFetching(state),
        followIsProgressing: getFollowIsProgressing(state)
    }
}


export default compose(
    connect(mapStateToProps, {requestUsers, FollowOrUnfollow,}),
)(UsersContainer)
