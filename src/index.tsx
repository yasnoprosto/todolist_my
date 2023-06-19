import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Todolist} from './Todolist';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Todolist />
);