import React from 'react';
import store from "./components/Redux/store-redux";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

 let rerenderEntireTree = () => {
    ReactDOM.render(
        <Provider store = {store}>
        <BrowserRouter>
                <App store = {store} />
        </BrowserRouter>
        </Provider>,
        document.getElementById('root'));
}


rerenderEntireTree(store.getState());

store.subscribe(() => {
    rerenderEntireTree();
})


reportWebVitals();
