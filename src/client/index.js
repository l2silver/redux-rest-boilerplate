import React from 'react';
import { render } from 'react-dom';
import { App } from './App';

//require('bootstrap/dist/css/bootstrap.css');
require("!style!css!less!bootstrap/less/bootstrap.less");
require("!style!css!sass!./stylesheets/index_stylesheets.scss");


render(<App />, document.getElementById('root'));
