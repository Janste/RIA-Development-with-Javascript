import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import routes from './config/routes';
import { createHashHistory } from 'history';

const history = createHashHistory();

ReactDOM.render( <Router history={history}>{routes}</Router>, document.getElementById('app'));