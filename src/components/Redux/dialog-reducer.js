import {reset} from "redux-form";

const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
    DialogData: [
        {id: 1, name: "Andri"},
        {id: 2, name: "Ivan"},
        {id: 3, name: "Viktoria"},
        {id: 4, name: "Vovka"},
        {id: 5, name: "Georgi"}
    ],
        MessagesData: [
    {id: 1, text: "Шо там"},
    {id: 2, text: "Чотко Віка ти Шо"},
    {id: 3, text: "Чотко Вовка"},
    {id: 4, text: "Грінч ти Де?"},
    {id: 5, text: "А де Андрій, хтось бачив Андрія"}
],
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newsMessage = {
                id: 6,
                text: action.theTextOfTheNewMessage,
            };
            state.MessagesData.push(newsMessage);
            return {...state,MessagesData:[...state.MessagesData] }
        default:
            return state
    }
};

export const addMessageActionCreator = (theTextOfTheNewMessage) => ({type: ADD_MESSAGE, theTextOfTheNewMessage})

export const addMessageAndReset = (text) => (dispatch) => {
    dispatch(addMessageActionCreator(text));
    dispatch(reset('dialogAddMessagesForm'))
}

export default dialogReducer;