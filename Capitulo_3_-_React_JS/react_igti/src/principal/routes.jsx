import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Book from '../book/book';
import About from '../about/about';
import Home from '../home/home';

export default props => (
    <Router history={hashHistory}>
        <Route path='/home' component={Home} />
        <Route path='/livros' component={Book} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/home' />
    </Router>
)