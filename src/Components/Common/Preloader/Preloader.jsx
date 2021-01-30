import React from "react";
import PreloaderLogo from '../../../accepts/images/Bean Eater-1s-200px.svg'
import s from './Preloader.module.css'

const Preloader = () => {
    return <div>
        <img className={s.Preloader} src={PreloaderLogo}/>
    </div>
}


export default Preloader