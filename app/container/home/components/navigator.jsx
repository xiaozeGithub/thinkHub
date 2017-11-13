import React from 'react'
import { Link } from 'react-router'
import { Icon } from 'antd';


import '../scss/navigator.scss'
class Navigator extends React.Component {
    constructor(props, context) {
        super(props, context)
    }
    render() {
        return (
            // 
            <div className='navContainer'>
                <div className='nav'>
                    <div>ThinkHub</div>
                    <span>案例</span>
                    <span>Thinkoa</span>
                    <span>ThinkORM</span>
                </div>
                <div className='user'>
                    <Icon type="user" style={{fontSize:'24px',color:'#99a9a8'}}/>
                    <span style={{marginLeft:'15px'}}>注册</span>
                    <span>登录</span>
                </div>
            </div>
        )
    }
}
module.exports = Navigator 