import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home/Home';
import Posts from './posts/Posts';
import Categories from './categories/Categories';

function Content(props) {
  return (
    <div className="container py-3 py-md-4 px-4 px-md-0">
      <Route exact path="/" render={() => <Home />} />
      <Route path="/posts" render={() => <Posts />} />
      <Route path="/categories" render={() => <Categories />} />
    </div>
  );
}

export default Content;
