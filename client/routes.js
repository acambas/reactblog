import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';


import Layout from './pages/layout';
import About from './pages/about';
import Blog from './pages/blog';
import Post from './pages/post';

export default
    <Route path="/" component={Layout}>
        <IndexRoute component={Blog}/>
        <Route path="about" component={About}/>
        <Route path="/post/id/:id" component={Post} />
    </Route>

