// import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from './myReact/react-dom';
import './index.css';

let jsxDom = (
  <div className="border">
    <p>前端全栈</p>
    <a href="https://www.bilibili.com/">跳转</a>
  </div>
);

ReactDOM.render(jsxDom, document.getElementById("root"));
