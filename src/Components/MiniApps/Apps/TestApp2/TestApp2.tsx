import React, {useState} from "react";
import styles from "./TestApp2.module.css"
import {Button} from "antd";
import {ArrowUpOutlined,ArrowDownOutlined} from "@ant-design/icons";


export const TestApp2:React.FC = () => {
    const SlidesCount = 4
    const [CurrentSlideIndex, SetCurrentSlideIndex] = useState(0)
    const ChangeSlide = (direction: 'up' | 'down') => {
        if (direction === 'up'){
            SetCurrentSlideIndex(CurrentSlideIndex + 1)
            if (CurrentSlideIndex === SlidesCount - 1) SetCurrentSlideIndex(0)
        } else {
            SetCurrentSlideIndex(CurrentSlideIndex - 1)
            if (CurrentSlideIndex <= 0) SetCurrentSlideIndex(SlidesCount - 1)
        }
    }


    return <div className={styles.body}>
        <div className={styles.container}>
            <div className={styles.sidebar}
                 style={{top: `-${(SlidesCount - 1) * 100}vh`, transform: `translateY(${CurrentSlideIndex * 100}vh)`}}>
                <SideSlide title={"Snow in the desert"}
                           gradient={"229.99deg, #11DEE9 -26%, #017E8B 145%"}/>
                <SideSlide title={"Life Hutch"}
                           gradient={"215.32deg, #F90306 -1%, #9E0706 124%"}/>
                <SideSlide title={"Zima Blue"}
                           gradient={"221.87deg, #8308EA 1%, #5305AF 128%"}/>
                <SideSlide title={"Automated Customer Service"}
                           gradient={"220.16deg, #FFE101 -8%, #F39102 138%"}/>
            </div>
            <div className={styles.main_slide} style={{transform: `translateY(-${CurrentSlideIndex * 100}vh)`}}>
                <Slide image={"https://images.unsplash.com/photo-1601574968106-b312ac309953?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1996&q=80"}/>
                <Slide image={"https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2023&q=80"}/>
                <Slide image={"https://images.unsplash.com/photo-1501529301789-b48c1975542a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"}/>
                <Slide image={"https://images.unsplash.com/photo-1520263115673-610416f52ab6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"}/>
            </div>
            <div className={styles.controls}>
                <Button className={styles.down_button} onClick={() => {ChangeSlide('down')}} icon={<ArrowDownOutlined/>}/>
                <Button className={styles.up_button}  onClick={() => {ChangeSlide('up')}} icon={<ArrowUpOutlined/>}/>
            </div>
        </div>


    </div>
}

const Slide: React.FC<{image: string}> = ({image}) => {
    return <div style={{backgroundImage: `url(${image})`}}>

    </div>
}

const SideSlide: React.FC<{gradient: string, title: string}> = ({gradient,title}) => {
    return <div style={{background: `linear-gradient(${gradient})`}}>
        <h1>{title}</h1>
        <p>Love, death & robots</p>
    </div>
}