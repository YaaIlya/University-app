import React from "react";
import { addNewMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialog-reducer';
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {

                let addNewMessage = () => {
                    store.dispatch(addNewMessageActionCreator());
                };

                let onMessageChange = (text) => {
                    store.dispatch(onMessageChangeActionCreator(text));
                };
                return <Dialogs sendMessage={addNewMessage} updateNewMessageText={onMessageChange} dialogsPage={store.getState().dialogsPage} />
            }
            }
        </StoreContext.Consumer>

    )
}

export default DialogsContainer;


