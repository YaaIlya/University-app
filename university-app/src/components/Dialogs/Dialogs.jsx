import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';
import DialogItem from "./Dialogitem/Dialogitem";
import Message from "./Massege/Message";
import state, { addNewMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialog-reducer';

const Dialogs = (props) => {



    let dialogsElements = props.state.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.state.dialogsPage.messagesData.map(m => <Message message={m.message} />);

    let newMessage = React.createRef();

    let addNewMessage = () => {
        props.dispatch(addNewMessageActionCreator());
    };

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.dispatch(onMessageChangeActionCreator(text));
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
                <textarea placeholder="Enter your message" ref={newMessage} onChange={onMessageChange} value={props.state.newMessage}></textarea>
            </div>
            <div className={s.button}>
                <button onClick={addNewMessage}>Add New post</button>
            </div>
        </div>
    )
}

export default Dialogs;


