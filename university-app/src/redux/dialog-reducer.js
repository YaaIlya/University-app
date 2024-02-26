const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_DATE_MESSAGE = "UPDATE-NEW-DATE-MESSAGE";

let initialState = {
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
    newMessage: " "
};

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessage,
            };
            state.messagesData.push(newMessage);
            state.newMessage = '';
            return state;
        case UPDATE_NEW_DATE_MESSAGE:
            state.newMessage = action.newText;
            return state;
        default:
            return state;
    }
}

export const addNewMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const onMessageChangeActionCreator = (text) => ({
    type: UPDATE_NEW_DATE_MESSAGE, newText: text
});

export default dialogReducer;