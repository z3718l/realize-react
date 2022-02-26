/**
 * 1、将vNode转换成node节点
 * 2、再将node插入到 container中
 *
 * 17版本里面直接自动给我们生成了vNode
 */

function render (vNode, container) {
//   console.log(vNode, container);
  // 将vNode转换成node节点
  let node = createNode(vNode);
  // 再将node插入到 container中
  container.appendChild(node);
}

// 创建真实的dom节点
function createNode(vNode) {
    let node = null;
    console.log(vNode);
    const { type } = vNode;
    // 处理原生节点
    if (typeof type === "string") {
        node = updateHostComponent(vNode);
    } else if (typeof type === "function") {
        node = updateFunctionComponent(vNode);
    }

    return node;
}

// 处理原生节点的方法(创建原生节点)
function updateHostComponent(vNode) {
  const { type, props } = vNode;
  let node = document.createElement(type);
  // 判断children是不是数组，如果是数据，则说明还有子元素
  // 如果是字符串，则说明是文本节点
  if (typeof props.children === "string") {
    // 如果是文本节点，直接插入到dom中
    let childText = document.createTextNode(props.children);
    node.appendChild(childText);
  } else {
    reconcileChildren(props.children, node);
  }

  // 给原生标签添加对应的属性
  updateNode(node, props);
  return node;
}
// 处理函数组件
// 直接执行函数
function updateFunctionComponent(vNode) {
    const { type, props } = vNode;
    const vvnode = type(props);
    let node = createNode(vvnode);
    return node;
}

// 更新属性
// 考虑一下其他属性如何加
function updateNode (node, nextVal) {
    Object.keys(nextVal)
    .filter(l => l !== 'children')
    .forEach(function (key) {
        node[key] = nextVal[key];
    })
}

// vNode=>node  插入到dom中
function reconcileChildren (children, node) {
    if (Array.isArray(children)) {
        for (let index = 0; index < children.length; index++) {
          const child = children[index];
          render(child, node);
        }
    } else {
        render(children, node);
    }
}

export default { render };
