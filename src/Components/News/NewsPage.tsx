import React, {ChangeEvent} from "react";
import s from "./News.module.css"
import NewsPost from "./NewsPost/NewsPost";
import {NewsActions} from "../../Redux/Reducers/NewsReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";


const NewsPage: React.FC = () => {
    const NewsState = useSelector((state: AppStateType) => state.NewsPage)
    const dispatch = useDispatch()
    const OnNewsAdd = () => {
        dispatch(NewsActions.addNewPost())
    }
    const OnChangeNews = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.target.value
       dispatch(NewsActions.addNewText(text))
    }
    const NewPostElements = NewsState.NewsPost.map(n => <NewsPost key={n.id}
                                                                      Text = {n.Text}
                                                                      Id = {n.id}
                                                                      Avtor = {n.Avtor} Img = {n.Img}/>)
    return (
        <div className={s.NewsPosts}>
            {NewPostElements}
            <textarea onChange={OnChangeNews} value={NewsState.NewsNewsText}/>
            <span><button onClick={OnNewsAdd}>Добавить новость </button></span>
            {/*<embed> </embed>*/}
        </div>
    )
}

export default NewsPage