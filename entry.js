import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'

import App from './components/app'
import Index from './components/index'

// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).
// FIXME: Router rendering
// ReactDOM.render((
//   <Router>
//    <Route path="/" component={Root}>
//      <IndexRoute component={Index} />
//    </Route>
//   </Router>
// ), document.getElementById('application'))

ReactDOM.render((<App />), document.getElementById('application'))
