import React from "react";
import s from "./UserNames.module.css";
import {NavLink} from "react-router-dom";

const UserNames = (props) => {
    let UserNamesItems = props.DialogData.map(el => (
        <div className={s.dialogItems + " " + s.activ }>
            <NavLink to={'/dialog/' + el.id}> {el.name}</NavLink>
        </div>)) || null
    return(
        <div>
            {UserNamesItems}
        </div>
    );
}

export default UserNames
