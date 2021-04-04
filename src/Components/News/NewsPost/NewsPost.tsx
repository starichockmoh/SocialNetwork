import React from "react";
import s from './NewPost.module.css'

type PropsType = {
    Text: string
    Avtor: string
    Img: string
    Id: number
}

const NewsPost: React.FC<PropsType> = (props) => {
    return (
        <div className={s.NewsPost}>
            {props.Text} {' '}
            {props.Avtor}
            {props.Img}
        </div>
    )
}
export default NewsPost