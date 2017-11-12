import React from 'react'
import { Link } from 'react-router'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context)
    }
    render() {
        return (
            <Link to='/home/success'>我是主页</Link>
        )
    }
}
module.exports = Home