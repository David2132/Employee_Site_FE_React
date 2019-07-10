import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Employees from './components/employeelist';
import Form from './components/form';
import Login from './components/login';

const routing = (
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/employees" component={Employees} />
            <Route path="/Form" component={Form} />
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
serviceWorker.unregister();
