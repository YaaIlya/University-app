import React from 'react';
import classes from "./Unisub.module.css";
import Date from './Datetime/Date';
import ImgInfo from './SubInfo/ImgInfo';
import SubName from './SubInfo/SubName';




const Unisub = (props) => {



    let dateItems = props.dateInfo.map(d => <Date objData={d.time} />);

    let ImgItems = props.imgName.map(I => <ImgInfo objData={I.name} />);

    let subElemetns = props.subName.map(s => <SubName objData={s.name} />);

    return <div className={classes.item}>
        {ImgItems}
        {subElemetns}
        <div className={classes.itemdate}>
            {dateItems}
        </div>
    </div>
}

export default Unisub;

