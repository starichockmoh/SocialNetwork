import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsBarContainer from "./FrindsBar/FriendsBarContainer";


const Navbar = (props) => {
    return (<nav className= {s.nav}>
            <div className= {s.item}>  < NavLink activeClassName={s.active} exact to ='/'> Profile</NavLink></div>
            <div className= {s.item}> <NavLink activeClassName={s.active} to ='/dialogs'>  Messages</NavLink> </div>
            <div className={s.item}> <NavLink activeClassName={s.active} to = '/news'>  News</NavLink> </div>
            <div className={s.item}> <NavLink activeClassName={s.active} to='/music'>  Music</NavLink> </div>
            <div className= {s.item}> <NavLink activeClassName={s.active}to= '/friends'> Friends </NavLink> </div>
            <div className= {s.item}> <NavLink activeClassName={s.active}to= '/users'> Find Users </NavLink> </div>
            <div className= {s.friendsBar}> <FriendsBarContainer/> </div>
            <div className= {s.settings}> <NavLink activeClassName={s.active}to= '/settings'>  Settings </NavLink> </div>
        </nav>
    );
}

export default Navbar;