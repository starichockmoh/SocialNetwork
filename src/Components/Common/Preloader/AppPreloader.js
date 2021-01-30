import React from "react";
import PreloaderLogo from '../../../accepts/images/Bean Eater-1s-200px.svg'
import s from './Preloader.module.css'

const AppPreloader = () => {
    return <div className={s.AppLoadingBlock}>
        <img className={s.AppPreloader} src={PreloaderLogo}/>
    </div>
}


export default AppPreloader