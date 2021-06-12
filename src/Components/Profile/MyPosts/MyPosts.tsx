import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import PostInputReduxForm from "./MyPostsForm";
import {PostType} from "../../../Types/Types";


type PropsType = {
    PostsState: Array<PostType>

    addNewPost: (post: string) => void
    deleteProfilePost: (postId: number) => void
}
const MyPosts: React.FC<PropsType> = React.memo(({PostsState, addNewPost, deleteProfilePost}) => {
    const PostsElements = [...PostsState].map(p => <Post deleteProfilePost={deleteProfilePost}
                                                       key={p.id} message={p.message} likecount={p.likecount}
                                                       id={p.id}/>);
    const addPost = (dataForm: {postInput: string}) => {
        addNewPost(dataForm.postInput)
    }
    return (<div className={s.PostDescription}>
            <h3> My posts</h3>
            <div>
                <PostInputReduxForm onSubmit={addPost}/>
            </div>
            <div className={s.posts}>
                {PostsElements}
            </div>
        </div>
    );
})

export default MyPosts;