import React from 'react';
import classes from "./Unisub.module.css";
import Date from './Datetime/Date';
import ImgInfo from './SubInfo/ImgInfo';
import SubName from './SubInfo/SubName';





const Unisub = (props) => {



    let dateItems = props.dateInfo.map(d => <Date objData={d.time} key={d.id} />);
    let ImgItems = props.imgName.map(I => <ImgInfo objData={I.name} key={I.id} />);
    let subElements = props.subName.map(s => <SubName objData={s.name} key={s.id} />);

    return (
        <div className={classes.item}>
            {ImgItems}
            {subElements}
            <div className={classes.itemdate}>
                {dateItems}
            </div>
        </div>
    );
}


export default Unisub;

