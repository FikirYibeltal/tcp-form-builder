import React from 'react'
import './DraggableFieldName.scss'
export const DraggableFieldName = ({ icon, name }: { icon: React.ReactNode; name: string }) => {
    return (
        <div className='draggable-field-name'>
            {icon}
            <p>{name}</p>
        </div>
    )
}
