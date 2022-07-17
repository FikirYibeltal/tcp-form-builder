/* eslint-disable no-console */
import { Button } from 'antd'
import { AvailableFieldsSidebar } from 'components/home/components/availablefieldssidebar/AvailableFieldsSidebar'
import { PageDroppableSection } from 'components/home/components/pagedroppablesection/PageDroppableSection'
import { availableFieldTabs, fieldTypes, formFields } from 'pages/Home/model/formFields'
import { initialPages, page, pages } from 'pages/Home/model/pages'
import React, { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { v4 as uuidv4 } from 'uuid'
import './DesignForm.scss'

export const DesignForm = () => {
    const [pages, setPages] = useState<pages>({ ...initialPages })
    const [pageOrder, setPageOrder] = useState<string[]>([Object.keys(initialPages)[0]])

    const onDragEnd = (result: any) => {
        const { source, destination, draggableId } = result

        if (!destination) return
        if (destination.droppableId === source.droppableId && destination.index === source.index)
            return
        if (availableFieldTabs.includes(source.droppableId)) {
            const item = formFields[source.droppableId as fieldTypes]?.find(
                (field) => field.id === draggableId,
            )
            const destinationId = destination.droppableId.substring(0, 36)
            const destinationClone: page = { ...pages[destinationId] }

            if (destinationClone && item) {
                if (destination.droppableId.includes('left')) {
                    destinationClone.left.splice(destination.index, 0, { ...item, id: uuidv4() })
                } else {
                    destinationClone.right.splice(destination.index, 0, { ...item, id: uuidv4() })
                }
                setPages({ ...pages, [destinationId]: destinationClone })
            }
        } else if (destination.droppableId === source.droppableId) {
            const destinationId = destination.droppableId.substring(0, 36)
            const destinationClone: page = { ...pages[destinationId] }
            if (destinationClone) {
                if (destination.droppableId.includes('left')) {
                    const left = Array.from(destinationClone.left)
                    const [removed] = left.splice(source.index, 1)
                    left.splice(destination.index, 0, removed)
                    destinationClone.left = left
                } else {
                    const right = Array.from(destinationClone.right)
                    const [removed] = right.splice(source.index, 1)
                    right.splice(destination.index, 0, removed)
                    destinationClone.right = right
                }
                setPages({ ...pages, [destinationId]: destinationClone })
            }
        } else {
            const sourceId = source.droppableId.substring(0, 36)
            const sourceClone: page = { ...pages[sourceId] }
            const destinationId = destination.droppableId.substring(0, 36)
            const destinationClone: page = { ...pages[destinationId] }
            if (destinationClone && sourceClone) {
                let removed = []
                if (source.droppableId.includes('left')) {
                    removed = sourceClone.left.splice(source.index, 1)
                } else {
                    removed = sourceClone.right.splice(source.index, 1)
                }

                if (destination.droppableId.includes('left')) {
                    destinationClone.left.splice(destination.index, 0, removed[0])
                } else {
                    destinationClone.right.splice(destination.index, 0, removed[0])
                }
                setPages({ ...pages, [destinationId]: destinationClone, [sourceId]: sourceClone })
            }
        }
    }
    const addPage = (index: number) => {
        const newPage = { [uuidv4()]: { right: [], left: [] } }
        const pageOrderClone = [...pageOrder]
        setPages({ ...pages, ...newPage })
        pageOrderClone.splice(index, 0, Object.keys(newPage)[0])
        setPageOrder(pageOrderClone)
    }

    const getActionButton = (pageId: string, index: number): React.ReactNode => {
        if (index === pageOrder.length - 1)
            return (
                <div className='action-section'>
                    <Button type='default'>Back</Button>
                    <Button type='primary'>Submit</Button>
                </div>
            )
        return (
            <div className='action-section'>
                <Button type='primary'>Continue</Button>
            </div>
        )
    }
    const addPages = (index: number) => {
        return (
            <div className='add-page-wrapper'>
                <div className='add-page'>
                    <p onClick={() => addPage(index)}>
                        <span>+ ADD NEW PAGE HERE</span>
                    </p>
                </div>
                <div className='page-number'>
                    <span>Page </span>
                    <span> {index + 1}</span>
                </div>
            </div>
        )
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className='home-design-form'>
                <AvailableFieldsSidebar />

                <div className='form-builder-section'>
                    {pageOrder.map((pageId, index) => (
                        <>
                            {addPages(index)}

                            <div className='page-section' key={index}>
                                <div className='page-form-drag-section'>
                                    <PageDroppableSection
                                        pages={pages}
                                        pageId={pageId}
                                        orientation='left'
                                    />
                                    <PageDroppableSection
                                        pages={pages}
                                        pageId={pageId}
                                        orientation='right'
                                    />
                                </div>
                                {getActionButton(pageId, index)}
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </DragDropContext>
    )
}
