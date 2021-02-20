import s from "./Paginator.module.css";
import React, {useCallback, useState} from "react";
import {useDispatch} from "react-redux";


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
            : <span><button onClick={pageLeft > 1 && MaxLeft}>back</button>
                <button onClick={pageLeft > 1 && changeSizeToLeft}>←</button></span> }
        {pages.map(p => {
            return <button onClick={() => {
                setCurrentPage(p)
                onPageChanged(p)
            }} className={currentPage === p && s.currentPage}>{p}</button>
        })}
        <button onClick={pageRight < pagesCount && changeSizeToRight}>→</button>
        <button onClick={pageRight < pagesCount && MaxRight}>next</button>
    </div>
})
