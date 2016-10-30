const React = require('react');
import { render } from 'react-dom';


import Application from './components/Application';

require ('./styles/styles.scss');

render (<Application />, document.getElementById('application'));
