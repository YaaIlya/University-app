import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./Dialogitem/Dialogitem";
import Message from "./Massege/Message";
import { addNewMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialog-reducer';

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = state.messagesData.map(m => <Message message={m.message} />);

    let newMessage = React.createRef();
    debugger;
    let addNewMessage = () => {
        // props.dispatch(addNewMessageActionCreator());
        props.sendMessage();
    };

    let onMessageChange = () => {
        let text = newMessage.current.value;
        // props.dispatch(onMessageChangeActionCreator(text));
        props.updateNewMessageText(text);
    };


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.textarea}>
                <textarea placeholder="Enter your message" ref={newMessage} onChange={onMessageChange} value={state.newMessage}></textarea>
            </div>
            <div className={s.button}>
                <button onClick={addNewMessage}>Add New post</button>
            </div>
        </div>
    )
}

export default Dialogs;


