import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';
import DialogItem from "./Dialogitem/Dialogitem";
import Message from "./Massege/Message";



const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: "Ilya" },
        { id: 2, name: "Varya" },
        { id: 3, name: "Artem" },
    ]

    let messagesData = [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Okey" },
    ]

    let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = messagesData.map(m => <Message message={m.message} />);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;
