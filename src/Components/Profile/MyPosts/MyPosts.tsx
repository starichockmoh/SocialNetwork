import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import PostInputReduxForm from "./MyPostsForm";
import {PostType} from "../../../Types/Types";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../Redux/ReduxStore";
import {ProfileActions} from "../../../Redux/Reducers/ProfileReducer";


export const MyPosts: React.FC = React.memo(() => {
    const PostData = useSelector((state: AppStateType) => state.ProfilePage.PostsData)
    const dispatch = useDispatch()
    const PostsElements = [...PostData].map(p => <Post key={p.id} message={p.message} likecount={p.likecount} id={p.id}/>);
    const addPost = (dataForm: {postInput: string}) => {
        dispatch(ProfileActions.addNewPost(dataForm.postInput))
    }
    return <div className={s.PostDescription}>
            <h3> My posts</h3>
            <div>
                <PostInputReduxForm onSubmit={addPost}/>
            </div>
            <div className={s.posts}>
                {PostsElements}
            </div>
        </div>
})
