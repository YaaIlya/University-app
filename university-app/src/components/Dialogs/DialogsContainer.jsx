import React from "react";
import { addNewMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialog-reducer';
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let addNewMessage = () => {
        props.store.dispatch(addNewMessageActionCreator());
    };

    let onMessageChange = (text) => {
        props.store.dispatch(onMessageChangeActionCreator(text));
    };


    return (
        <Dialogs sendMessage={addNewMessage} updateNewMessageText={onMessageChange} dialogsPage={state} store={props.store} />
    )
}

export default DialogsContainer;


