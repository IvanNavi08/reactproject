import React from "react";
import s from "./MesengerssItem.module.css"


const Message = (props) => {

    return (
        <div className={s.mesengerssItem} id={props.id}>
            {props.text}
        </div>


    )
}
export default Message;