import React from 'react'
import { Link } from 'react-router'
import { Layout, Icon } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

import Navigator from  './components/navigator'
import Card from  './components/thinkcard'
import './scss/home.scss'


class Home extends React.Component {
    constructor(props, context) {
        super(props, context)
    }
    render() {
        return (
            <div className="homeContainer">
                <Layout className="homeContainer">
                    <Header className="header">
                        <div className='headerContent'>
                            <Navigator/>
                        </div>
                    </Header>
                    <Content  className="homeContent">
                        <div className='homeMain'>
                            <div className='contCard'>
                                <Card/>
                            </div>
                            <div className='contConversition'>
                                <div className='setConversation'>
                                     <Icon type="plus" style={{color:'#fff',fontSize:'14px'}}/> 发布新话题
                                </div>
                            
                            </div>
                        </div>
                    </Content>
                    <Footer className="footer">Powered by ThinkKoa © 2017thinkkoa.org</Footer>
                </Layout>
            </div>
        )
    }
}
module.exports = Home


