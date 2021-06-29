import React from "react";
import s from "./News.module.css"
import NewsPost from "./NewsPost/NewsPost";
import {useSelector} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";
import {PageHeader} from "antd";
import {FireOutlined} from "@ant-design/icons";

const NewsPage: React.FC = () => {
    const NewsState = useSelector((state: AppStateType) => state.NewsPage)
    const NewPostElements = NewsState.NewsPost.map(n => <NewsPost key={n.id}
                                                                  Title={n.Title}
                                                                  Text={n.Text}
                                                                  id={n.id}
                                                                  Img={n.Img}
                                                                  Data={n.Data}
    />)
    return (
        <div className={s.NewsPosts}>
            <PageHeader title={<>News <FireOutlined /></>}/>
            {NewPostElements}
        </div>
    )
}

export default NewsPage