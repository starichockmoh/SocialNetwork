import React from "react";
import {Paginator} from "../Common/Paginator/Paginator";
import Preloader from "../Common/Preloader/Preloader";
import UserElement from "../Users/UserElement/UserElement";
import {UserType} from "../../Types/Types";
import {setCurrentFriendPageACType} from "../../Redux/Reducers/UsersReducer";

type PropsType = {
    onPageChanged: (p:number) => void
    totalUsersCount: number
    pageSize: number
    currentFriendPage: number
    setCurrentFriendPageAC: (FriendsPage:number) => setCurrentFriendPageACType
    requestUsers: (currentPage:number, pageSize:number, friend:boolean,term: string) => void
    followIsProgressing: Array<number>
    FollowOrUnfollow: (userId:number,follow:boolean,isFriend:boolean) => void
    isFetching: boolean
    friends: Array<UserType>
}
const Friends: React.FC<PropsType> = (props) => {
    return (
        <div>
            <Paginator
                onPageChanged={props.onPageChanged} totalItems={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentFriendPage}
                currentPageAc={props.setCurrentFriendPageAC}
            />
            {props.isFetching ? <Preloader/> :
                props.friends.map(u => <UserElement key={u.id}
                                                    user={u}
                                                    followIsProgressing={props.followIsProgressing}
                                                    FollowOrUnfollow={props.FollowOrUnfollow}
                                                    isFriend={true}
                />)

            }
        </div>
    )
}

export default Friends