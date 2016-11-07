import React from 'react';
import MenuBar from '../components/MenuBar';
import Home from '../components/Home';
import Page from '../components/Page';
import SearchResults from '../components/SearchResults';
import { Route, IndexRoute } from 'react-router';

export default (
  <Route path="/" component={MenuBar}>
  	<IndexRoute component={Home} />
  	<Route  path="item/:itemname" component={Page} />
  	<Route  path="search/:item" component={SearchResults} />
  </Route>
);