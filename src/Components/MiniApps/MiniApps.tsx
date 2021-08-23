import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MiniApps.module.css"
import photo from "./../../accepts/images/app1.png"
import photo1 from "./../../accepts/images/app2.png"
import photo2 from "./../../accepts/images/app3.png"
import photo3 from "./../../accepts/images/app4.png"
import photo4 from "./../../accepts/images/app5.png"

export const MiniApps: React.FC = () => {
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