import React from 'react';
import classes from "./Date.module.css";

const Date = (props) => {
    return <div>
        <div className={classes.item}>{props.message}</div>
    </div>
}

export default Date;