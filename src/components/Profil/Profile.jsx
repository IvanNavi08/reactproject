import React from "react";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfilePhoto/ProfileInfo";
import NevPostConatiner from "./NevPost/NewPostContainer";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}
                         status = {props.status}
                         updateProfileStatus = {props.updateProfileStatus}
                         isOwner = {props.isOwner}
                         savePfoto = {props.savePfoto}
                         saveProfile = {props.saveProfile}

            />
            <NevPostConatiner />
            <PostsContainer />
        </div>
    )
}

export default Profile;