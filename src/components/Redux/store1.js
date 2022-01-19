import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
let store = {
    _state:{
        Profile : {
            PostData: [
                {id: 1, text: "Mr. Universe", ava: "https://www.ambal.ru/12641317555.jpg"},
                {
                    id: 2,
                    text: "A friend of Arnold Schwarzenegger",
                    ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdj2-6pLJ5zWun7WLiJG7bPuyP-iqF5NdZjQ&usqp=CAU"
                },
                {
                    id: 3,
                    text: "Champion of Liberia for eating stones",
                    ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVmJBGCZxHssgi1bBOFPJQ26DUSmQr265oIQ&usqp=CAU"
                },
                {
                    id: 4,
                    text: "Who is he?",
                    ava: "https://horrorzone.ru/uploads/persons-02/mini/alexander-nevsky09-377-216.jpg"
                },
                {id: 5, text: "Answered Obvious!", ava: "https://uznayvse.ru/images/content/2018/1/uzn_15157745103.jpg"},
                {id: 6, text: "Alexander Nevsky", ava: "https://znamkaluga.ru/wp-content/uploads/2021/05/1-9.jpg"},
                {id: 7, text: "Here so from here so from", ava: "https://i.playground.ru/p/U2y2xeTYD1SLr-GIjrouNQ.jpeg"}
            ],
            newPostText: "",
        },
        Dialogues: {
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
            theTextOfTheNewMessage: "",
        }


    },
    _callSubscriber () {

    },

     getState() {
        return this._state;
},
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.Profile = profileReducer(this._state.Profile, action)
        this._state.Dialogues = dialogReducer(this._state.Dialogues, action)

        this._callSubscriber(this._state);


    }
}

window.store = store;

export default store;