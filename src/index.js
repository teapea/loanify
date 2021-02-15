import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './styles/index.css';
import Login from './Components/Login';
import PasswordReset from './Components/PasswordReset';
import HomeLayout from './Components/HomeLayout';
import reportWebVitals from './reportWebVitals';
//import Dashboard from './Pages/Dashboard';


ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Switch> 
   <Route path="/" exact component={Login} />
   <Route path="/forgot_password" exact component={PasswordReset} />
   <Route path="/home" render={(props) => (<HomeLayout {...props} title="Home"  />)} />
   <Route path="/dashboard" render={(props) => (<HomeLayout {...props}  page={1} title="Dashboard"  />)} />
   </Switch>

   </Router>
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
