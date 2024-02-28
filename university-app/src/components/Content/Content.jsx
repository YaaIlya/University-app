import React from 'react';
import classes from "./Content.module.css";
import Unisub from './Unisubjects/Unisub';





const Content = (props) => {

    let state = props.contentPage;

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.onPostChange(text);
    }

    return <div>
        <div className={classes.schedule}>Расписание на <a>сегодня</a></div>
        <Unisub dateInfo={state.dateInfo} imgName={state.imgName} subName={state.subName} addTime={state.addTime} />

        <div className={classes.textarea}>
            <textarea onChange={onPostChange} ref={newPostElement} value={state.newDateText} />
        </div>
        <div className={classes.button}>
            <button onClick={onAddPost}>Add post</button>
        </div>
    </div>
}


export default Content;
