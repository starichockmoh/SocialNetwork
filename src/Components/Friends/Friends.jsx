import React from "react";
import {Paginator} from "../Common/Paginator/Paginator";
import Preloader from "../Common/Preloader/Preloader";
import UserElement from "../Users/UserElement/UserElement";


const Friends = (props) => {
    return (
        <div>
            <Paginator
                onPageChanged={props.onPageChanged} totalItems={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentFriendPage}
                currentPageAc = {props.setCurrentFriendPageAC}
            />
            {props.isFetching ? <Preloader/> :
                props.friends.map(u => <UserElement key={u.id}
                                                  user={u}
                                                  followIsProgressing={props.followIsProgressing}
                                                  FollowOrUnfollow={props.FollowOrUnfollow}
                                                    isFriend = {true}
                />)

            }
        </div>
    )
}

export default Friends