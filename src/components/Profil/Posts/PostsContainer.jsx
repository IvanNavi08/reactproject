import {connect} from "react-redux";
import Posts from "./Posts";


let mapStateToProps = (state) => {
    return {
        PostData: state.Profile.PostData
    }
}


const postContainer = connect(mapStateToProps, {})(Posts)
export default postContainer