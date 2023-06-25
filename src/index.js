import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
// ReactDOM.render(<App />, document.getElementById('root')); 
// ReactDOM.render(<App /><Potato />, document.getElementById('root')); 
// 리액트는 최종으로 단 한개의 컴포넌트를 그려야 함 Potato 컴포넌트를 -> App 컴포넌트에 넣어야 함