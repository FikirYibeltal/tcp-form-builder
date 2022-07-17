import { DraggableFieldInput } from 'components/form/draggableFieldInput/DraggableFieldInput'
import { pages } from 'pages/Home/model/pages'
import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { mapContentToName } from 'utils/mapContentToName'
import './PageDroppableSection.scss'
export const PageDroppableSection = ({
    pageId,
    pages,
    orientation,
}: {
    pageId: string
    pages: pages
    orientation: 'left' | 'right'
}) => {
    return (
        <Droppable droppableId={`${pageId}-${orientation}`}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`form-page-item-${orientation}`}
                >
                    {pages[pageId][orientation]?.map((field, index) => (
                        <Draggable draggableId={field.id} index={index} key={field.id}>
                            {(provided) => (
                                <div
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    ref={provided.innerRef}
                                    key={index}
                                    className='draggable-field-single-item'
                                >
                                    <DraggableFieldInput name={mapContentToName(field.content)} />
                                </div>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}
