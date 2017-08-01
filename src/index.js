import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import './index.css';
import {BrowserRouter as Router,hashHistory} from 'react-router-dom';

ReactDOM.render(
  <Router history={hashHistory}>	
  		<App />
  	
   </Router > 
  ,
  document.getElementById('root')
);
