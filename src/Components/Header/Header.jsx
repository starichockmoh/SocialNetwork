import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import HeaderProfile from "./HeaderProfile/HeaderProfile";


const Header = (props) => {
    return (
        <header className={s.header}><NavLink to={`/profile/${props.userId}`}>
            <img src='https://bumper-stickers.ru/69359-thickbox_default/logotip-atlanta-thrashers-atlanta-tresherz.jpg'/>
        </NavLink>
            <div className={s.login}>
                {props.isAuth ?
                    <HeaderProfile login={props.login}
                                   CurrentUserPhoto={props.CurrentUserPhoto}
                                   authLogOut = {props.authLogOut}
                    />

                    : <NavLink to='/login'>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;