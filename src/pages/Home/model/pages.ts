import { v4 as uuidv4 } from 'uuid'
export interface page {
    right: { id: string; content: string }[]
    left: { id: string; content: string }[]
}
export interface pages {
    [x: string]: page
}
export const initialPages: pages = {
    [uuidv4()]: { right: [], left: [] },
}
