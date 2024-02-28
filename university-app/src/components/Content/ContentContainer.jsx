import React from 'react';
import { addPostActionCreator, onPostChangeActionCreator } from '../../redux/content-reducer';
import Content from './Content';





const ContentContainer = (props) => {

    let state = props.store.getState().contentPage;

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        let action = onPostChangeActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <Content addPost={addPost} onPostChange={onPostChange} contentPage={state} store={props.store} />
    )
}

export default ContentContainer;
