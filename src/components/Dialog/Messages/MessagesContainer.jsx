
import { addMessageAndReset} from "../../Redux/dialog-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        MessagesData: state.Dialogues.MessagesData,
        theTextOfTheNewMessage:state.Dialogues.theTextOfTheNewMessage
    }
}



const MessagesContainer = connect(mapStateToProps, {addMessageAndReset}) (Messages);

export default MessagesContainer;