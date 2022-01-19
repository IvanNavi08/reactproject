import React, {useState} from "react";
import s from "./ProfilePhoto.module.css"
import Scrolls from "../../../Fail/scroll";
import ProfileStatusHook from "../ProfileStatus/ProfileStatusHook";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({profile,savePfoto,saveProfile,isOwner, status, updateProfileStatus }) => {

    let [editMode, seteditMode] = useState(false);

    if (!profile) {
        return <Scrolls/>
    }

    const mainFotoProfile = (e) => {
        if (e.target.files.length) {
            savePfoto(e.target.files[0])
        }
    }

    const onSubmit =  (formData) => {
      saveProfile(formData).then(
          () => {
              seteditMode(false) } ) }

    const setEditMode = () => {
        console.log('ivan')
        seteditMode(true)
    }

    return (
        <div>
            <div>
                <img className={s.fotoF} src={profile.photos.large ||
                    "https://anekdot.kozaku.in.ua/uploads/posts/2021-03/1615069144_pyt.jpg"
                 }/>
                {isOwner && <input type={"file"} onChange={mainFotoProfile} className={s.file}/>}
            </div>
            {
                editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> :
                    <ProfileData goToEditMode= {setEditMode} profile={profile} isOwner={isOwner}/>
            }

            <ProfileStatusHook status={status} updateProfileStatus={updateProfileStatus}/>
        </div>
    );
}

const Contact = ({contactTitle,contactValue }) => {
    return (
        <div className={s.contact}>
            <b>{contactTitle}:</b> {contactValue}
        </div>)
}

const ProfileData = ({isOwner, goToEditMode,profile}) => {

    return <div className={s.profileInfo}>
    <div>

        <div>
            <b>Full name:</b>{profile.fullName}
        </div>
        <div>
            <b>Looking for a job:</b>{profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skills:</b>{profile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b>About me: </b>{profile.aboutMe}
        </div>
        <div>
            <b>Contacts: </b>{Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
        {isOwner && <div><button onClick={goToEditMode} className={s.edit}> edit</button> </div>}
    </div>
    </div>
}

export default ProfileInfo;