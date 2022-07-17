import { v4 as uuidv4 } from 'uuid'

export interface fieldItem {
    id: string
    content: string
}
export type fieldTypes = 'active' | 'company'
export const formFields: Record<fieldTypes, fieldItem[]> = {
    active: [
        {
            id: uuidv4(),
            content: 'firstName',
        },
        {
            id: uuidv4(),
            content: 'lastName',
        },
        {
            id: uuidv4(),
            content: 'phoneNumber',
        },
        {
            id: uuidv4(),
            content: 'email',
        },
        {
            id: uuidv4(),
            content: 'title',
        },
        {
            id: uuidv4(),
            content: 'address',
        },
        {
            id: uuidv4(),
            content: 'personId',
        },
        {
            id: uuidv4(),
            content: 'password',
        },
        {
            id: uuidv4(),
            content: 'position',
        },
        {
            id: uuidv4(),
            content: 'accountType',
        },
        {
            id: uuidv4(),
            content: 'attachment',
        },
    ],
    company: [
        {
            id: uuidv4(),
            content: 'firstName',
        },
        {
            id: uuidv4(),
            content: 'lastName',
        },
        {
            id: uuidv4(),
            content: 'phoneNumber',
        },
        {
            id: uuidv4(),
            content: 'email',
        },
        {
            id: uuidv4(),
            content: 'title',
        },
        {
            id: uuidv4(),
            content: 'address',
        },
        {
            id: uuidv4(),
            content: 'personId',
        },
        {
            id: uuidv4(),
            content: 'password',
        },
        {
            id: uuidv4(),
            content: 'position',
        },
        {
            id: uuidv4(),
            content: 'accountType',
        },
        {
            id: uuidv4(),
            content: 'attachment',
        },
    ],
}

export const availableFieldTabs: fieldTypes[] = ['active', 'company']
