import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import * as serviceWorker from './serviceWorker';
import './assets/scss/style.scss'

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
 