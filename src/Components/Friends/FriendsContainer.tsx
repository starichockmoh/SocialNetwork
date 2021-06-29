import React from "react";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    FollowOrUnfollow,
    requestUsers,
    UserActions, setCurrentFriendPageACType, setFilterType,
} from "../../Redux/Reducers/UsersReducer";
import {
    getFollowIsProgressing,
    getIsFetching,
    getPageSize
} from "../../Redux/Selectors/UsersSelector";
import Friends from "./Friends";
import {AppStateType} from "../../Redux/ReduxStore";
import {UserType} from "../../Types/Types";
import {PageHeader} from "antd";
import {HeartOutlined} from "@ant-design/icons";

type MapStateToPropsType = {
    currentFriendPage: number
    pageSize: number
    friends: Array<UserType>
    totalUsersCount: number
    followIsProgressing: Array<number>
    isFetching: boolean
}
type MapDispatchToPropsType = {
    FollowOrUnfollow: (userId: number, follow: boolean, isFriend: boolean) => void
    setCurrentFriendPageAC: (FriendsPage:number) => setCurrentFriendPageACType
    requestUsers: (currentPage: number, pageSize: number, friend: boolean, term: string) => void
    setFilter: (friend: boolean, term: string) => setFilterType
}

type OwnProps = {
    title: string
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnProps


class FriendsContainerClass extends React.Component<PropsType> {
    componentDidMount() {
        let {currentFriendPage} = this.props
        this.props.requestUsers(currentFriendPage, 9, true, '')
    }

    componentWillUnmount() {
        this.props.setFilter(false, '')
    }

    onPageChanged = (p: number) => {
        this.props.requestUsers(p, 5, true, '')
    }

    render() {
        return (
            <div>
                <PageHeader title={<>{this.props.title} <HeartOutlined/></>}/>
                <div><Friends {...this.props} onPageChanged={this.onPageChanged}/></div>
            </div>
        )
    }
}


let mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        friends: state.UsersPage.friends,
        pageSize: getPageSize(state),
        totalUsersCount: state.UsersPage.totalFriendsCount,
        isFetching: getIsFetching(state),
        followIsProgressing: getFollowIsProgressing(state),
        currentFriendPage: state.UsersPage.currentFriendPage
    }
}

const {setCurrentFriendPageAC, setFilter} = {...UserActions}

const FriendsContainer: any =  compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnProps, AppStateType>(mapStateToProps, {requestUsers,
        FollowOrUnfollow, setCurrentFriendPageAC, setFilter}),
    withAuthRedirect
)(FriendsContainerClass)

export default FriendsContainer