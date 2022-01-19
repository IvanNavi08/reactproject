import React from "react";
import s from "./MesengerssItem.module.css"
import Message from "./Message";
import MessageReduxForm from "./MessagesForm";

const Messages = (props) => {
    let addNewMessage = (values) => {
        props.addMessageAndReset(values.theTextOfTheNewMessage)
    };

    let MessagesElements = props.MessagesData.map(el => <Message text={el.text} id={el.id}/>) || null

    return (
        <div >
            <div>
                {MessagesElements}
            </div>
            <div>
                <MessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Messages;