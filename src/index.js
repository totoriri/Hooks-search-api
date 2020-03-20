import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './components/MainPage';
import EntryPage from './components/EntryPage';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './reset.css';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={EntryPage}/>
            <Route  path='/MainPage' component={MainPage} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
