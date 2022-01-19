import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../Validation/Validation";
import {Textarea} from "../../Forms/formsControl";

const maxLength15 = maxLengthCreator(15)

const addNewPost = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={"newPostText"} type={"text"}
                   validate={[ required, maxLength15 ]}
            />
    <button> Add post</button>
        </form>
    )
}

const NewPostRedux = reduxForm({form: 'addNewPost'})(addNewPost)

export default NewPostRedux;