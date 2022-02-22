import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MiniApps.module.css"


export const MiniApps: React.FC = () => {
    let photo = ''
    let photo1 = ''
    let photo2 = ''
    let photo3 = ''
    let photo4 = ''
    return <div className={styles.MiniAppsBlock}>
        <h1 className={styles.Title}> Mini Apps </h1>
        <ul className={styles.AppsList}>
            <NavLink to={'/test'}>
                <li className={styles.App} style={{backgroundImage: `url(${photo})`}}>
                </li>
            </NavLink>
            <NavLink to={'/test1'}>
                <li className={styles.App} style={{backgroundImage: `url(${photo1})`}}>
                </li>
            </NavLink>
            <NavLink to={'/test2'}>
                <li className={styles.App} style={{backgroundImage: `url(${photo2})`}}>
                </li>
            </NavLink>
            <NavLink to={'/test3'}>
                <li className={styles.App} style={{backgroundImage: `url(${photo3})`}}>
                </li>
            </NavLink>
            <NavLink to={'/test4'}>
                <li className={styles.App} style={{backgroundImage: `url(${photo4})`}}>
                </li>
            </NavLink>

        </ul>
    </div>
}