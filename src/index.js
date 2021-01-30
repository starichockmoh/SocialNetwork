import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import FirstReactApp from "./App";


ReactDOM.render(
        <FirstReactApp/>,
    document.getElementById('root')
);


serviceWorker.unregister();
