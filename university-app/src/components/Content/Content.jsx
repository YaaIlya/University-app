import React from 'react';
import classes from "./Content.module.css";
import Unisub from './Unisubjects/Unisub';
import state, { addPostActionCreator, onPostChangeActionCreator } from '../../redux/content-reducer';





const Content = (props) => {

    let state = props.store.getState().contentPage;

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
        // props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // let action = onPostChangeActionCreator(text);
        // props.dispatch(action);
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
