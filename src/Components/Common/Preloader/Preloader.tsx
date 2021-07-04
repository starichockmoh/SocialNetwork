import React from "react";
import PreloaderLogo from '../../../accepts/images/Bean Eater-2s-200px.svg'
import s from './Preloader.module.css'

const Preloader: React.FC = () => {
    return <div>
        <img className={s.Preloader} src={PreloaderLogo} alt = ''/>
    </div>
}


export default Preloader