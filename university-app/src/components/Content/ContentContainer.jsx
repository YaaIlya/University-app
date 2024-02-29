import React from 'react';
import { addPostActionCreator, onPostChangeActionCreator } from '../../redux/content-reducer';
import Content from './Content';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
    return {
        contentPage: state.contentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },

        onPostChange: (text) => {
            let action = onPostChangeActionCreator(text);
            dispatch(action);
        },
    }
}

const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content);

export default ContentContainer;
