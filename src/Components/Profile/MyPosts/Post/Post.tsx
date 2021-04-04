import React from 'react';
import s from './Post.module.css';


type PropsType = {
    deleteProfilePost: (postId: number) => void
    message:string
    likecount:number
    id:number
}
const Post: React.FC<PropsType> = (props) => {
    const id = props.id
    const deleteProfilePost = () => {
        props.deleteProfilePost(id)
    }
    return(<div className={s.item}>
            <img src = 'https://avatars.mds.yandex.net/get-zen_doc/171120/pub_5b44a8cd3e56d900a85b258e_5b44aa46a2e4e400a92221a3/scale_1200' alt={''}/>
            {props.message}
            <div><span>
                Like {' '}
                {props.likecount}
            </span></div>
            <button onClick={deleteProfilePost}>Delete</button>
            <hr className={s.Hr}/>
        </div>
    );
}
export default Post;