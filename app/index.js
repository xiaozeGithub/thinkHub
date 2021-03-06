// Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。
// 举例来说，ES6在Array对象上新增了Array.from方法。Babel就不会转码这个方法。如果想让这个方法运行，必须使用babel-polyfill，为当前环境提供一个垫片。


// 项目入口文件
import React, {Component} from 'react'
import {render} from 'react-dom'
import Routers from './route/router'

import './styles/base.css'

// 组件渲染到真实dom节点
render(
	<Routers/>,
	document.getElementById('app')
)