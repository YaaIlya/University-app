import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';
import DialogItem from "./Dialogitem/Dialogitem";
import Message from "./Massege/Message";
import state from "../redux/state";



const Dialogs = (props) => {


    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = props.state.messagesData.map(m => <Message message={m.message} />);

    let newMessage = React.createRef();

    let addNewMessage = () => {
        let text = newMessage.current.value;
        alert(text);
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
                <textarea ref={newMessage}></textarea>
            </div>
            <div className={s.button}>
                <button onClick={addNewMessage}>Add New post</button>
            </div>
        </div>
    )
}

export default Dialogs;


