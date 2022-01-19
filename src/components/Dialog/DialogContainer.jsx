
import {connect} from "react-redux";
import Dialog from "./Dialog";
import {withAuthRedirect} from "../Hoc/AuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) =>{
    return {
        Dialogues: state.Dialogues

    }
}



export default compose (
    connect(mapStateToProps,{}),
    withAuthRedirect
) (Dialog);