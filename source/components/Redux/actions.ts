import { CLEAR_INPUT, ADD_ITEM, REMOVE_ITEM, REMOVE_ALL, TOGGLE_ITEM, TOGGLE_ALL, SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED  } from './types';

export function addItem(title: string) {
    return {
        type: ADD_ITEM,
        id: Date.now(),
        title
    }
}

export function removeItem(id: number) {
    return {
        type: REMOVE_ITEM,
        id: id
    }
}

export function removeALl() {
    return {
        type: REMOVE_ALL
    }
}

export function toggleItem(id: number) {
    return {
        type: TOGGLE_ITEM,
        id
    }
}

export function toggleAll() {
    return {
        type: TOGGLE_ALL
    }
}

export function showALL() {
    return {
        type: SHOW_ALL
    }
}

export function showActive() {
    return {
        type: SHOW_ACTIVE
    }
}

export function showCompleted() {
    return {
        type: SHOW_COMPLETED
    }
}