import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';



const Dialogs = (props) => {

    const DialogItem = (props) => {
        let path = "/Dialogs/" + props.id;

        return (
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        )
    }

    const Message = (props) => {
        return (
            <div className={s.message}>{props.message}</div>
        )
    }

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



    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
            </div>
        </div>
    )
}

export default Dialogs;
