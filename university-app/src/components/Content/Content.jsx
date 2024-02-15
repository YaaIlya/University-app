import React from 'react';
import classes from "./Content.module.css";
import Unisub from './Unisubjects/Unisub';

const Content = (props) => {

    return <div>
        <div className={classes.schedule}>Расписание на <a>сегодня</a></div>
        <Unisub dateInfo={props.state.dateInfo} imgName={props.state.imgName} subName={props.state.subName} />
        <Unisub dateInfo={props.state.dateInfo} imgName={props.state.imgName} subName={props.state.subName} />
    </div>
}

export default Content;
