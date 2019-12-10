import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import { createStore, combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';

// Specify Reducers and add redux form reducer to the list

const reducers = {
    // In realistic Situation You will have more reducers here
    form: formReducer
};

const reducer = combineReducers(reducers);
let store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENTION__ &&
    window.__REDUX_DEVTOOLS_EXTENTION__()
)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
