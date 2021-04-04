import React, {ChangeEvent} from "react";
import s from "./News.module.css"
import NewsPost from "./NewsPost/NewsPost";
import {addNewPostType, addNewTextType, InitialStateNewsType} from "../../Redux/Reducers/NewsReducer";



type PropsType = {
    addNewPost: addNewPostType
    addNewText: addNewTextType
    NewsState: InitialStateNewsType
}

const News: React.FC<PropsType> = (props) => {
    let OnNewsAdd = () => {
        props.addNewPost()
    }
    let OnChangeNews = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.target.value
        props.addNewText(text)
    }
    let NewPostElements = props.NewsState.NewsPost.map(n => <NewsPost key={n.id}
                                                                      Text = {n.Text}
                                                                      Id = {n.id}
                                                                      Avtor = {n.Avtor} Img = {n.Img}/>)
    return (
        <div className={s.NewsPosts}>
            {NewPostElements}
            <textarea onChange={OnChangeNews} value={props.NewsState.NewsNewsText}/>
            <span><button onClick={OnNewsAdd}>Добавить новость </button></span>
            {/*<embed> </embed>*/}
        </div>
    )
}

export default News