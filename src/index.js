import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Weather from "./App";

ReactDOM.render(<Weather />, document.getElementById('root'));
registerServiceWorker();
