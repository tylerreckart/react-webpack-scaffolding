import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import Root from './components/Root';
import Index from './components/Index';

ReactDOM.render((
  <Router>
    <Route path="/" component={Root}>
      <IndexRoute compnonent={Index}>
    </Route>
  </Router>
), document.getElementById('application'));
