const React = require('react');
import { render } from 'react-dom';


import Application from './components/Application';

// require ('./styles/styles.scss');
require ('./stylesheets/main.scss');


render (<Application />, document.getElementById('application'));
