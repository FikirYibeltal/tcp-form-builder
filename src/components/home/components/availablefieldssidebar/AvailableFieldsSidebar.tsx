import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Layout, Tabs } from 'antd'
import { DraggableFieldName } from 'components/form/draggableFieldName/DraggableFieldName'
import { availableFieldTabs, formFields } from 'pages/Home/model/formFields'
import React, { useState } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { mapContentToIcon } from 'utils/mapContentToIcon'
import { mapContentToName } from 'utils/mapContentToName'
import './AvailableFieldsSidebar.scss'
const { Sider } = Layout
const { TabPane } = Tabs
export const AvailableFieldsSidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
    const onCollapse = () => {
        setIsCollapsed(!isCollapsed)
    }
    return (
        <Layout>
            <Sider
                collapsedWidth={50}
                className='form-fields-sidebar'
                collapsed={isCollapsed}
                collapsible
            >
                <div className={`header ${isCollapsed ? 'collapsed' : ''}`}>
                    {!isCollapsed && <h4>Available Fields</h4>}
                    {isCollapsed ? (
                        <RightOutlined onClick={onCollapse} />
                    ) : (
                        <LeftOutlined onClick={onCollapse} />
                    )}
                </div>
                {!isCollapsed && (
                    <Tabs defaultActiveKey='0' className='form-fields-tabs'>
                        {availableFieldTabs.map((tab, index) => (
                            <TabPane tab={tab.toLocaleUpperCase()} key={index}>
                                <Droppable droppableId={tab} isDropDisabled={true}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                            className='form-items'
                                        >
                                            {formFields[tab]?.map((field, index) => (
                                                <Draggable
                                                    draggableId={field.id}
                                                    index={index}
                                                    key={field.id}
                                                >
                                                    {(provided, snapshot) => (
                                                        <>
                                                            <div
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                ref={provided.innerRef}
                                                                key={index}
                                                                className='form-item'
                                                            >
                                                                <DraggableFieldName
                                                                    icon={mapContentToIcon(
                                                                        field.content,
                                                                    )}
                                                                    name={mapContentToName(
                                                                        field.content,
                                                                    )}
                                                                />
                                                            </div>
                                                            {snapshot.isDragging && (
                                                                <DraggableFieldName
                                                                    icon={mapContentToIcon(
                                                                        field.content,
                                                                    )}
                                                                    name={mapContentToName(
                                                                        field.content,
                                                                    )}
                                                                />
                                                            )}
                                                        </>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </TabPane>
                        ))}
                    </Tabs>
                )}
            </Sider>
        </Layout>
    )
}
