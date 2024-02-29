import React from "react";
import { addNewMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialog-reducer';
import Dialogs from "./Dialogs";
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(onMessageChangeActionCreator(text));
        },
        sendMessage: () => {
            dispatch(addNewMessageActionCreator());
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;


