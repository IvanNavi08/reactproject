import React from "react";
import s from "./Dialog.module.css"
import UserNames from "./UserNames/UserNames";
import MessagesContainer from "./Messages/MessagesContainer";

const Dialog = (props) => {
    return (
        <div className={s.Vmist}>
            <div>
                <UserNames DialogData={props.Dialogues.DialogData} />
            </div>
            <div>
                <MessagesContainer />
            </div>
        </div>
    )
}

export default Dialog;