import React from "react";
import {connect} from "react-redux";
import {
    requestUsers,
    FollowOrUnfollow, setCurrentPageAC
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
            this.props.requestUsers(currentPage,pageSize,null)
        }
    }

    onPageChanged = (p) => {
        let {pageSize,currentSearchTerm} = this.props
        this.props.requestUsers(p,pageSize,false,currentSearchTerm)
    }


    render() {
        return <>
                <Users {...this.props } onPageChanged={this.onPageChanged}
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
        followIsProgressing: getFollowIsProgressing(state),
        currentPage: state.UsersPage.currentPage,
        currentSearchTerm: state.UsersPage.currentSearchTerm
    }
}


export default compose(
    connect(mapStateToProps, {requestUsers, FollowOrUnfollow,setCurrentPageAC}),
)(UsersContainer)
