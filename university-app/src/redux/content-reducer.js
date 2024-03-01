const ADD_TIME = "ADD-TIME";
const UPDATE_NEW_DATE_TEXT = "UPDATE-NEW-DATE-TEXT";

let initialState = {
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
};

const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TIME:
            let newDateInfo = {
                id: 3,
                time: state.newDateText,
            };
            return {
                ...state,
                newDateText: "",
                dateInfo: [...state.dateInfo, newDateInfo],
            };;

        case UPDATE_NEW_DATE_TEXT:
            return {
                ...state,
                newDateText: action.newText
            };

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_TIME })

export const onPostChangeActionCreator = (text) =>
    ({ type: UPDATE_NEW_DATE_TEXT, newText: text })

export default contentReducer;