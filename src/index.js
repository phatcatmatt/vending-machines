import React from 'react';
import ReactDOM from 'react-dom';
//TODO: this reset is throwing a warning saying it's not being used but it is still working
import reset from 'reset-css';
import 'normalize.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
