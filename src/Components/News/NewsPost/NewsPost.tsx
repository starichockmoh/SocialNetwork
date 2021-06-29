import React from "react";
import s from './NewPost.module.css'
import {PageHeader} from "antd";
import {Button, Carousel, Image} from "antd";

type PropsType = {
    Text: string
    id: number
    Title: string
    Img: Array<string>
    Data: string
}

const NewsPost: React.FC<PropsType> = ({Title, Text, Img, Data}) => {
    const contentStyle = {
        height: '500px',
        color: '#fff',
        lineHeight: '160px',
        background: '#364d79',
    };
    const PhotoArray = Img.map(p => <div>
        <p style={contentStyle}><Image height={500} width={800} src = {p}/></p>
    </div>)
    return <div className={s.NewsPost}>
        <PageHeader title={Title} subTitle={'SocialNews'}/>
        <h1>{Data}</h1>
        <div>
            {Text}
        </div>
        <Carousel style={{marginTop: 10}}>
            {PhotoArray}
        </Carousel>
    </div>
}
export default NewsPost