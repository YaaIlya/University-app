import contentReducer from "./content-reducer";
import dialogReducer from "./dialog-reducer";



let store = {
    _state: {
        contentPage: {
            dateInfo: [
                { id: 1, time: "12:20 305 кабинет" },
                { id: 2, time: "16:00 0204 кабинет" },
            ],
            imgName: [
                { id: 1, name: "https://cdn.pvs-studio.com/import/docx/blog/0710_DevOps_vs_DevSecOps_ru/image2.png?ver=07-27-2023-02-50-26" }
            ],
            subName: [
                { id: 1, name: "DevOps" },
            ],
            newDateText: "It-kamaz"
        },

        dialogsPage: {
            dialogsData: [
                { id: 1, name: "Ilya" },
                { id: 2, name: "Varya" },
                { id: 3, name: "Artem" },
            ],
            messagesData: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How are you?" },
                { id: 3, message: "Okey" },
            ],
            newMessage: ""
        },
    },
    _callSubscriber() {
        console.log("State was Changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.contentPage = contentReducer(this._state.contentPage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    },

}


window.store = store;

export default store;