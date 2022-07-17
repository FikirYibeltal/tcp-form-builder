import { EditOutlined, MoreOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import React from 'react'
import './DraggableFieldInput.scss'
interface DraggableFieldInputProps {
    name: string
    onEdit?: (e: any) => void
}
export const DraggableFieldInput = ({ name, onEdit }: DraggableFieldInputProps) => {
    return (
        <div className='draggable-field-input'>
            <div className='header'>
                <span>{name}</span>
                <div className='action'>
                    <EditOutlined onClick={onEdit} />
                    <MoreOutlined />
                </div>
            </div>
            <Input className={'input'} disabled />
            <div className='make-input-draggable'></div>
        </div>
    )
}
