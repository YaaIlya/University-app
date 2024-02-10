import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/Dialogs/1">Ilya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/Dialogs/2">Varya</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Okey</div>
            </div>
        </div>
    )
}

export default Dialogs;
