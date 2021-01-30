import React from "react";
import FriendBar from "./FrindBar/FriendBar";

const FriendsBar = (props) => {
    let FrindElements = props.FriendsBarState.map(f => <FriendBar key = {f.id} Img = {f.Img} Name= {f.Name} OnOf = {f.OnOf} id = {f.id}/>)
    return (
        <div> {FrindElements} </div>
    )
}

export default FriendsBar