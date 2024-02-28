import React from 'react';
import { addPostActionCreator, onPostChangeActionCreator } from '../../redux/content-reducer';
import Content from './Content';
import StoreContext from '../../StoreContext';





const ContentContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                };

                let onPostChange = (text) => {
                    let action = onPostChangeActionCreator(text);
                    store.dispatch(action);
                }

                return <Content addPost={addPost} onPostChange={onPostChange} contentPage={store.getState().contentPage} />
            }
            }
        </StoreContext.Consumer>

    )
}

export default ContentContainer;
