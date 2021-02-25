import s from "./Paginator.module.css";
import React, {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import 'antd/dist/antd.css';
import {Button} from 'antd';


export const Paginator = React.memo(({onPageChanged, totalItems, pageSize,currentPage, currentPageAc}) => {
    let pagesCount = Math.ceil(totalItems / pageSize)
    const dispatch = useDispatch()
    const setCurrentPage = useCallback((page) => {
        dispatch(currentPageAc(page))},[dispatch,currentPageAc])
    let [pageLeft,changePageLeft] = useState(1)
    let [pageRight, changePageRight] = useState(10)

    let changeSizeToRight = () => {
        setCurrentPage(pageLeft+10)
        changePageRight(pageRight+10)
        changePageLeft(pageLeft+10)
    }

    let changeSizeToLeft = () => {
        setCurrentPage(pageLeft-10)
        changePageRight(pageRight-10)
        changePageLeft(pageLeft-10)
    }

    let MaxLeft = () => {
        changePageRight(10)
        changePageLeft(1)
        setCurrentPage(1)

    }

    let MaxRight = () => {
        changePageLeft(pagesCount-10)
        changePageRight(pagesCount)
        setCurrentPage(pagesCount-10)
    }

    let pages = []
    for (let i = pageLeft; i <= pageRight; i++) {
        pages.push(i)
        if (i >= pagesCount) {
            break
        }
    }
    return <div>
        {(pageLeft === 1)? null
            : <span><Button onClick={pageLeft > 1 && MaxLeft}>back</Button>
                <Button onClick={pageLeft > 1 && changeSizeToLeft}>←</Button></span> }
        {pages.map(p => {
            return <Button onClick={() => {
                setCurrentPage(p)
                onPageChanged(p)
            }} className={currentPage === p && s.currentPage}>{p}</Button>
        })}
        <Button onClick={pageRight < pagesCount && changeSizeToRight}>→</Button>
        <Button onClick={pageRight < pagesCount && MaxRight}>next</Button>
    </div>
})
