import React from "react";
import s from "./ProfilePhoto.module.css"
import {Input, Textarea} from "../../Forms/formsControl";
import {reduxForm} from "redux-form";
import {Field} from "redux-form/es";



const ProfileDataForm = ({profile,handleSubmit,error}) => {
    return  <div className={s.profileInfo}>
    <form onSubmit={handleSubmit}>

         <div><button>save</button> </div>

        {error && <div className={s.formError}>
            {error}
        </div>}
        <div>
            <b>Full name:</b>
            <Field placeholder={"Full name"} name={"fullName"} validate={[]} component={Input} type={"text"}/>
        </div>
        <div>
            <b>Looking for a job:</b>
            <Field placeholder={""} name={"lookingForAJob"} validate={[]} component={Input} type={"checkbox"}/>

        </div>
            <div>
                <b>My professional skills:</b>
                <Field placeholder={"My professional skills"} name={"lookingForAJobDescription"}
                       validate={[]} component={Textarea} type={"text"}/>
            </div>
        <div>
            <b>About me: </b>
            <Field placeholder={"About me"} name={"aboutMe"}
                   validate={[]} component={Textarea} type={"text"}/>
        </div>
        <div>
            <b>Contacts: </b>{Object.keys(profile.contacts).map(key => {
            return  <div key={key} className={s.contact}>
                <b> {key} :
                    <Field placeholder={key} name={"contacts" + key} validate={[]}
                           component={Input} type={"text"}/>
                    </b>
            </div>
        })}
        </div>
    </form>
    </div>
};

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;