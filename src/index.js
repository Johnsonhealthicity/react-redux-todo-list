import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import App from './components/App';
import rootReducer from './reducers';
import ItemsList from './components/ItemsList';
import { composeWithDevTools} from "@redux-devtools/extension";
import './index.css';
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

ReactDOM.render(
    <Provider store={ store }>
        <App />
        <hr/>
        <ItemsList />
    </Provider>,
    document.getElementById('root')
);