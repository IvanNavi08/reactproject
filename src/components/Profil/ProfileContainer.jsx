import React from "react";
import Profile from "./Profile";
import {getProfile, getStatus, savePfoto, saveProfile, updateProfileStatus} from "../Redux/profile-reducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../Hoc/AuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{
    apdateProfileFoto () {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = this.props.logUserId;
        }
        if(!userId) {
            this.props.history.push("/login")
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }
    componentDidMount() {
        this.apdateProfileFoto();
    }

componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId != prevProps.match.params.userId) {
            this.apdateProfileFoto();
        }

}

    render () {
        if(!this.props.isAuth) return <Redirect to={"/login"}/>
        return (
            <Profile {...this.props}
                     isOwner ={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status = {this.props.status}
                     updateProfileStatus = {this.props.updateProfileStatus}
                     savePfoto = {this.props.savePfoto}
                     saveProfile = {this.props.saveProfile}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.Profile.profile,
    status: state.Profile.status,
    logUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect (mapStateToProps, {getProfile, getStatus, updateProfileStatus, savePfoto, saveProfile}),
    withRouter,
    withAuthRedirect
) (ProfileContainer);

