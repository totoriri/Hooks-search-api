import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './components/MainPage';
import EntryPage from './components/EntryPage';
import Collection from './components/Collection';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import PersonIcon from '@material-ui/icons/Person';

import './reset.css';
import './index.scss';


ReactDOM.render(
    <BrowserRouter>
        <nav>
        <h1>Logo</h1>
        <div className="nav-right">
          <Link to="/Collection" className="collection">Collection</Link>
          <PersonIcon />
        </div>
        </nav>
        <Switch>
            <Route exact path='/' component={EntryPage}/>
            <Route path='/MainPage' component={MainPage} />
            <Route path='/Collection' component={Collection} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
