import {
    DownOutlined,
    FileMarkdownOutlined,
    InfoCircleOutlined,
    PhoneOutlined,
    UserOutlined,
} from '@ant-design/icons/lib/icons'
import React from 'react'

export const mapContentToIcon = (content: string) => {
    switch (content) {
        case 'firstName':
            return <UserOutlined />
        case 'lastName':
            return <UserOutlined />
        case 'phoneNumber':
            return <PhoneOutlined />
        case 'email':
            return <FileMarkdownOutlined />
        case 'title':
            return <DownOutlined />

        case 'personId':
            return <UserOutlined />

        default:
            return <InfoCircleOutlined />
    }
}
