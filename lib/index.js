const React = require('react');
import { render } from 'react-dom';


import Application from './components/Application';

require ('./stylesheets/main.scss');
import firebase from './firebase';

render (<Application />, document.getElementById('application'));
