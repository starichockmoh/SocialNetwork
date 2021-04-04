import React from 'react';
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {addNewPost, deleteProfilePost} from "../../../Redux/Reducers/ProfileReducer";
import { AppStateType } from '../../../Redux/ReduxStore';
import {PostType} from "../../../Types/Types";

type MapStateToPropsType = {
    PostsState: Array<PostType>
}
type MapDispatchToPropsType = {
    addNewPost: (post: string) => void
    deleteProfilePost: (postId: number) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        PostsState: state.ProfilePage.PostsData
    }
}
const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps,
    {addNewPost, deleteProfilePost})(MyPosts)

export default MyPostsContainer;