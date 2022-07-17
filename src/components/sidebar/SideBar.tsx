import {
    ArrowLeftOutlined,
    ArrowRightOutlined,
    MessageOutlined,
    QuestionCircleOutlined,
    SettingOutlined,
    UserOutlined,
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import React, { useState } from 'react'
import './SideBar.scss'

const { Sider } = Layout
export const SideBar = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true)
    return (
        <Layout>
            <Sider collapsedWidth={50} collapsible collapsed={isCollapsed} className='outer-sider'>
                <Menu className='outer-sider-menu-top'>
                    <Menu.Item key={1} icon={<UserOutlined />}>
                        Users
                    </Menu.Item>
                    <Menu.Item
                        key={2}
                        icon={isCollapsed ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}
                        onClick={() => setIsCollapsed(!isCollapsed)}
                    >
                        {isCollapsed ? 'Open' : 'Collapse'}
                    </Menu.Item>
                </Menu>
                <Menu className='outer-sider-menu-bottom'>
                    <Menu.Item key={3} icon={<UserOutlined />}>
                        Profile
                    </Menu.Item>
                    <Menu.Item key={4} icon={<SettingOutlined />}>
                        Settings
                    </Menu.Item>
                    <div className='outer-sider-break'></div>
                    <Menu.Item key={5} icon={<QuestionCircleOutlined />}>
                        Help
                    </Menu.Item>
                    <Menu.Item key={6} icon={<MessageOutlined />}>
                        Messages
                    </Menu.Item>
                </Menu>
            </Sider>
        </Layout>
    )
}
