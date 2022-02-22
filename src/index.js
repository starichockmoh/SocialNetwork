import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {FirstReactApp} from "./App";
import {TestingUseState} from "./Hooks/TestingUseState";
import {TestingUseEffect} from "./Hooks/TestingUseEffect";





ReactDOM.render(
    <FirstReactApp/>,
    document.getElementById('root')
);


serviceWorker.unregister();
