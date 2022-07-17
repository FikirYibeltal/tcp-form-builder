import { BellOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import UserProfile from 'assets/icons/jpg/user-profile.jpg'
import { SecondaryLogo } from 'assets/icons/svg/SecondaryLogo'
import { contextType, formContext } from 'contexts/formcontext/formContext'
import React, { useContext } from 'react'
import './Header.scss'

export const HomeHeader = () => {
    const form: contextType = useContext(formContext)
    return (
        <div className='home-header-wrapper'>
            <div className='top-header'>
                <div className='left'>
                    <div className='logo'>
                        <SecondaryLogo className='image' />
                        <h1>TCP</h1>
                    </div>
                    <div className='title'>
                        <h2>{form?.formTitle}</h2>
                    </div>
                </div>
                <div className='right'>
                    <BellOutlined className='notification' />
                    <Avatar src={UserProfile} size='large' />
                </div>
            </div>
        </div>
    )
}
