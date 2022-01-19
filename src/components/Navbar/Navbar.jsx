import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";


const Navbar = () => {
return (

    <nav className={`${s.nav} nav`}>
        <div>
        <div className={s.Sil}>
            <NavLink to="/Profile" activeClassName={s.silka}> profile</NavLink>
        </div>
            <div className={s.Sil}>
                <NavLink to="/dialog" activeClassName={s.silka}>Messages</NavLink>
            </div>
            <div className={s.Sil}>
                <NavLink to="/Friends" activeClassName={s.silka}>Friends</NavLink>
            </div>
        <div className={s.Sil}>
            <NavLink to="/Nevs" activeClassName={s.silka}> News</NavLink>
        </div >
         <div className={s.Sil}>
             <NavLink to="/Music" activeClassName={s.silka}>Music </NavLink>
         </div>
         <div className={s.Sil}>
             <NavLink to="/Settings" activeClassName={s.silka}>Settings</NavLink>
        </div>
        <div className={s.Sil}>
                <NavLink to="/IVAN" activeClassName={s.silka}>IVAN</NavLink>
        </div>
        </div>
    </nav>
);
}
export default Navbar;