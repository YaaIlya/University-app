import React from 'react';
import classes from "./Unisub.module.css";
import Date from './Datetime/Date';

const Unisub = () => {
    return <div className={classes.item}>
        <img src="https://cdn.pvs-studio.com/import/docx/blog/0710_DevOps_vs_DevSecOps_ru/image2.png?ver=07-27-2023-02-50-26" />
        <div>DevOps</div>
        <div className={classes.itemdate}>
            <Date message="12:20 305 кабинет" />
            <Date message="16:00 0204 кабинет" />
        </div>


    </div>
}

export default Unisub;