// import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from './myReact/react-dom';
import Component from "./myReact/Component";
import './index.css';

class ClassComponent extends Component {
    render () {
        console.log(this.props);
        return <div>我是类组件</div>;
    }
}

function FunctionComponent(props) {
    const {name} = props;
    console.log(name, '==>>88');
    return (
      <div className="border">
        我是函数组件
        {/* <p>===》name</p> */}
      </div>
    );
}

let jsxDom = (
  <div className="border">
    <p>前端全栈</p>
    <a href="https://www.bilibili.com/">跳转</a>
    <FunctionComponent name="我是从函数组件传下来的数据" />
    <ClassComponent name="我是从类组件" />
  </div>
);

ReactDOM.render(jsxDom, document.getElementById("root"));
