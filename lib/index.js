const React = require('react');
import { render } from 'react-dom';


import Application from './components/Application';

require ('./stylesheets/main.scss');

render (<Application />, document.getElementById('application'));
