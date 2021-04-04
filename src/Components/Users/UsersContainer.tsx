import React from "react";
import {connect} from "react-redux";
import {
    requestUsers,
    FollowOrUnfollow, setCurrentPageAC, setCurrentPageACType
} from "../../Redux/Reducers/UsersReducer";
import Users from "./Users";
import {compose} from "redux";
import {
    getFollowIsProgressing, getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersSuper
} from "../../Redux/Selectors/UsersSelector";
import {UserType} from "../../Types/Types";
import {AppStateType} from "../../Redux/ReduxStore";


type MapStateToPropsType = {
    currentPage: number
    pageSize: number
    users: Array<UserType>
    currentSearchTerm: string
    totalUsersCount: number

    followIsProgressing: Array<number>
    isFetching: boolean
}
type MapDispatchToPropsType = {
    FollowOrUnfollow: (userId: number, follow: boolean, isFriend: boolean) => void
    setCurrentPageAC: (page:number) => setCurrentPageACType
    requestUsers: (currentPage: number, pageSize: number, friend: boolean, term: string) => void
}

type OwnPropsType = {
    title: string
}
type PropsType = OwnPropsType & MapDispatchToPropsType & MapStateToPropsType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        let {currentPage, pageSize} = this.props
        if (this.props.users.length === 0) {
            this.props.requestUsers(currentPage, pageSize, false, '')
        }
    }

    onPageChanged = (p: number) => {
        let {pageSize, currentSearchTerm} = this.props
        this.props.requestUsers(p, pageSize, false, currentSearchTerm)
    }


    render() {
        return <>
            <h1>{this.props.title}</h1>
            <Users {...this.props} onPageChanged={this.onPageChanged}/>
        </>
    }
}

let mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        users: getUsersSuper(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        isFetching: getIsFetching(state),
        followIsProgressing: getFollowIsProgressing(state),
        currentPage: state.UsersPage.currentPage,
        currentSearchTerm: state.UsersPage.currentSearchTerm,
    }
}

//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(mapStateToProps, {requestUsers, FollowOrUnfollow, setCurrentPageAC}),
)(UsersContainer)
