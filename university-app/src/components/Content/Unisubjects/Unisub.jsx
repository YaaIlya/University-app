import React from 'react';
import classes from "./Unisub.module.css";
import Date from './Datetime/Date';
import ImgInfo from './SubInfo/ImgInfo';
import SubName from './SubInfo/SubName';




const Unisub = () => {

    let dateInfo = [
        { id: 1, time: "12:20 305 кабинет" },
        { id: 2, time: "16:00 0204 кабинет" },
    ]

    let dateItems = dateInfo.map(d => <Date objData={d.time} />);


    return <div className={classes.item}>
        <ImgInfo />
        <SubName />
        <div className={classes.itemdate}>
            {dateItems}
        </div>
    </div>
}

export default Unisub;
