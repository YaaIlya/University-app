import React from 'react';
import classes from "./Content.module.css";
import Unisub from './Unisubjects/Unisub';

const Content = (props) => {

    return <div>
        <div className={classes.schedule}>Расписание на <a>сегодня</a></div>
        <Unisub dateInfo={props.dateInfo} imgName={props.imgName} subName={props.subName} />
        <Unisub dateInfo={props.dateInfo} imgName={props.imgName} subName={props.subName} />
    </div>
}

export default Content;
