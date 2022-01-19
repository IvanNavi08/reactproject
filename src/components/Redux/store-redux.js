import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import friendsReducer from "./frinds-reducer";
import authReducer from "./auth-reducer"
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import appReducer from "./app-reducer";


let redusers = combineReducers({
    Profile: profileReducer,
    Dialogues: dialogReducer,
    FriendsList: friendsReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer

});
let store = createStore(redusers, applyMiddleware(thunk));
window.store= store

export default store;