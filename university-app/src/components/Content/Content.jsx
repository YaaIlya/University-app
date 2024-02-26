import React from 'react';
import classes from "./Content.module.css";
import Unisub from './Unisubjects/Unisub';
import state, { addPostActionCreator, onPostChangeActionCreator } from '../../redux/content-reducer';





const Content = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = onPostChangeActionCreator(text);
        props.dispatch(action);
    }

    return <div>
        <div className={classes.schedule}>Расписание на <a>сегодня</a></div>
        <Unisub dateInfo={props.state.contentPage.dateInfo} imgName={props.state.contentPage.imgName} subName={props.state.contentPage.subName} addTime={props.state.contentPage.addTime} />

        <div className={classes.textarea}>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.state.contentPage.newDateText} />
        </div>
        <div className={classes.button}>
            <button onClick={addPost}>Add post</button>
        </div>
    </div>
}

export default Content;
