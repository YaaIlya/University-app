import React from 'react';
import classes from "./Content.module.css";
import Unisub from './Unisubjects/Unisub';

const Content = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    };

    return <div>
        <div className={classes.schedule}>Расписание на <a>сегодня</a></div>
        <Unisub dateInfo={props.state.dateInfo} imgName={props.state.imgName} subName={props.state.subName} />
        <Unisub dateInfo={props.state.dateInfo} imgName={props.state.imgName} subName={props.state.subName} />
        <div className={classes.textarea}>
            <textarea ref={newPostElement}></textarea>
        </div>
        <div className={classes.button}>
            <button onClick={addPost}>Add post</button>
        </div>
    </div>
}

export default Content;
