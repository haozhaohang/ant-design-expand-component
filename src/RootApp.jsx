import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react';
import { Menu } from 'antd'
import Page1 from './containers/Page1'
import Page2 from './containers/Page2'
import Page3 from './containers/Page3'

export default class extends Component {
    render() {
        return <BrowserRouter>
            <div style={{ width: '1200px', margin: '0 auto' }}>
                <div style={{ margin: '20px',fontSize: '22px' }}>
                    点击提交按钮可以在console.log中看到打印数据结果
                </div>
                <Menu
                    mode="horizontal"
                >
                    <Menu.Item>
                        <Link to={'/page1'}>基础表单</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to={'/page2'}>拓展表单</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to={'/page3'}>上传表单组件</Link>
                    </Menu.Item>
                </Menu>
                <div style={{ marginTop: '50px' }}>
                    <Route path="/" exact render={() => <Redirect to='/Page1' />} />
                    <Route path="/Page1" component={Page1} />
                    <Route path="/page2" component={Page2} />
                    <Route path="/page3" component={Page3} />
                </div>
            </div>
        </BrowserRouter>
    }
}