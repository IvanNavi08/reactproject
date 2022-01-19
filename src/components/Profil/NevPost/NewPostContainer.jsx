
import {addPostAndReset} from "../../Redux/profile-reducer";
import NevPost from "./NevPost";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        PostData: state.Profile.PostData,
        newPostText: state.Profile.newPostText
    }
}

const NevPostConatiner = connect (mapStateToProps, {addPostAndReset}) (NevPost);

export default NevPostConatiner;