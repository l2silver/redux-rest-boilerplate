import React from 'react';
import { render } from 'react-dom';
import {App} from './comp2/Simple';

require("!style!css!less!bootstrap/less/bootstrap.less");
require("!style!css!sass!./stylesheets/index_stylesheets.scss");


render(<App />, document.getElementById('root'));
