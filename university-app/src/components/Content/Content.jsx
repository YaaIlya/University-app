import React from 'react';
import classes from "./Content.module.css";
import Unisub from './Unisubjects/Unisub';

const Content = () => {
    return <div>
        <div>Расписание на <a>сегодня</a></div>
        <Unisub />
        <Unisub />
    </div>
}

export default Content;