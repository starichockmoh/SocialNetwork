import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import PostInputReduxForm from "./MyPostsForm";


const MyPosts = React.memo(props => {
    console.log(props)
    let PostsElements = [...props.PostsState].map(p => <Post deleteProfilePost = {props.deleteProfilePost} key={p.id} message={p.message} likecount={p.likecount}
                                                        id={p.id}/>);
    let addPost = (dataForm) => {
        props.addNewPost(dataForm.postInput)
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