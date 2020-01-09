import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css';


import {addMessage} from './Redux/state';



export let rerender = (state) => {
// куда выводим компонент
ReactDOM.render(<App appState={state} addMessage={addMessage}  />, document.getElementById('root'));
}




