import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Nevs from "./components/Nevs/Nevs";
import {Route, withRouter} from "react-router-dom";
import DialogContainer from "./components/Dialog/DialogContainer";
import FriendsListContainer from "./components/FriendsList/FriendsListContainer";
import ProfileContainer from "./components/Profil/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializ} from "./components/Redux/app-reducer";
import Scrolls from "./Fail/scroll";
import {getAuthUserDats} from "./components/Redux/auth-reducer";

class App extends React.Component {
    componentDidMount() {
        this.props.getAuthUserDats();
    }
    render() {
        if(!this.props.initialized) {
            <Scrolls/>
        }
        return (
            <div className="app-wrap">
                <HeaderContainer/>
                <Navbar/>
                <div>
                    <Route path="/Profile/:userId?" render={() =>
                        <ProfileContainer/>}/>
                    <Route path="/dialog" render={() =>
                        <DialogContainer/>}/>
                    <Route path="/Friends" render={() =>
                        <FriendsListContainer/>}/>
                    <Route path="/Nevs" render={() => <Nevs/>}/>
                    <Route path="/Login" render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose (
    connect(mapStateToProps, {initializ,getAuthUserDats}),withRouter)(App);
