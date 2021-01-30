import React from "react";
import s from './NewPost.module.css'

const NewsPost = (props) => {
    return (
        <div className={s.NewsPost}>
            {props.Text} {' '}
            {props.Avtor}
            {props.Img}
        </div>
    )
}
export default NewsPost