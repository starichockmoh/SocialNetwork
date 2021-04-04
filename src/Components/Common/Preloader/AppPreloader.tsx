import React from "react";
import PreloaderLogo from '../../../accepts/images/Bean Eater-1s-200px.svg'
import s from './Preloader.module.css'

const AppPreloader: React.FC = () => {
    return <div className={s.AppLoadingBlock}>
        <img className={s.AppPreloader} src={PreloaderLogo} alt = ''/>
    </div>
}


export default AppPreloader