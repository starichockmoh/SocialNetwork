import React from 'react';
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {addNewPost, deleteProfilePost} from "../../../Redux/Reducers/ProfileReducer";



let mapStateToProps = (state) => {
    return {
        PostsState: state.ProfilePage.PostsData
    }
}
const MyPostsContainer = connect(mapStateToProps,
    {addNewPost, deleteProfilePost})(MyPosts)

export default MyPostsContainer;