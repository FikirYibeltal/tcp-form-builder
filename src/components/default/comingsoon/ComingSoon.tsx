import React from 'react'
import './ComingSoon.scss'
export const ComingSoon = ({ text = 'Coming Soon ..' }: { text?: string }) => {
    return (
        <div className='coming-soon'>
            <span>{text}</span>
        </div>
    )
}
