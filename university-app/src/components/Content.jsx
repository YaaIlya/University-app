import React from 'react';
import classes from "./Content.module.css";

const Content = () => {
    return <div className={classes.content}>
        <div>Расписание на <a>сегодня</a></div>
        <div>
            <div className={classes.item}> img</div>
            <div className={classes.item}> предмет</div>
            <div className={classes.item}>время и кабинет</div>
        </div>
    </div>
}

export default Content;