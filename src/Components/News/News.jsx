import React from "react";
import s from "./News.module.css"
import NewsPost from "./NewsPost/NewsPost";


const News = (props) => {
    let OnNewsAdd = () => {
        props.addNewPost()
    }
    let OnChangeNews = (e) => {
        let text = e.target.value
        props.addNewText(text)
    }
    let NewPostElements = props.NewsState.NewsPost.map(n => <NewsPost key={n.id} Text = {n.Text} Id = {n.id} Avtor = {n.Avtor} Img = {n.Img}/>)
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