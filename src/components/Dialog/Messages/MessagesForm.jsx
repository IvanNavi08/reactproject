import React from "react";
import s from "./MesengerssItem.module.css";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../Forms/formsControl";
import {maxLengthCreator, required} from "../../Validation/Validation";

const maxLength50 = maxLengthCreator(50)

const AddMessagesForm = (props) => {

    return (
        <div >
        <form onSubmit={props.handleSubmit} className={s.bloc}>
            <Field component={Textarea}
                   name={"theTextOfTheNewMessage"}
                   className={s.fieldWater} type={"text"}
                   validate={[required, maxLength50]}
            />
            <button className={s.fotobloc}>
                <img className={s.foto}
                     src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1VkHQOy-dBpORw5-axaycQ5u8YW3Iw0iCg&usqp=CAU"}/>
            </button>
        </form>
        </div>
    )
};

const MessageReduxForm = reduxForm({form: 'dialogAddMessagesForm'})(AddMessagesForm)

export default MessageReduxForm;