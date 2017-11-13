import React from 'react'
import { Link } from 'react-router'
import { Icon, Pagination } from 'antd';


import '../scss/thinkcard.scss'
class Card extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            cardList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    }
    render() {
        return (
            <div>
                <div className='cardWrapr'>
                    {
                        this.state.cardList.map((item, index) => {
                            return (
                                <div key={index} className='cardContainer'>
                                    <div className='supportTag'>网站推荐</div>
                                    <div className='contentContainer'>
                                        <div className='content'>
                                            <img src="http://qiaker.cn/static/images/user/8.jpg" />
                                            <div className='titleContainer'>
                                                <div className='title'>链基百科 LnkiPedia - 一个可定制化的搜索引擎</div>
                                                <div className='autor'>
                                                    <span>zening</span>
                                                    <span style={{ marginLeft: '16px' }}>前天 08-08 10:06</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='tag'>
                                            <div>
                                                <span style={{ marginRight: '24px' }}>132</span>
                                                <Icon type="user" style={{ fontSize: '14px', marginRight: '4px' }} />
                                                <span >122</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }



                </div>
                <div className='pagination'> <Pagination defaultCurrent={1} total={100} /></div>
            </div>


        )
    }
}
module.exports = Card