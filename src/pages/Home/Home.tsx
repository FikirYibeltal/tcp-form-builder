import { Tabs } from 'antd'
import { HomeHeader } from 'components/home/components/header/Header'
import React from 'react'
import './Home.scss'
import { DataModel } from './subpages/datamodel/DataModel'
import { DesignForm } from './subpages/designform/DesignForm'
import { FormSettings } from './subpages/formsettings/FormSettings'

const { TabPane } = Tabs
export const Home = () => {
    return (
        <div className='content'>
            <HomeHeader />
            <Tabs defaultActiveKey='1' className='header-tab'>
                <TabPane tab='Design Form' key='1'>
                    <DesignForm />
                </TabPane>
                <TabPane tab='Form Settings' key='2'>
                    <FormSettings />
                </TabPane>
                <TabPane tab='Data Model' key='3'>
                    <DataModel />
                </TabPane>
            </Tabs>
        </div>
    )
}
