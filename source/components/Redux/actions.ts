import { ADD_ITEM, REMOVE_ITEM, REMOVE_TOGGLED, TOGGLE_ITEM, TOGGLE_ALL, SET_FILTER, StatusType } from './types';

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
        id
    }
}

export function removeToggled() {
    return {
        type: REMOVE_TOGGLED
    }
}

export function toggleItem(id: number) {
    return {
        type: TOGGLE_ITEM,
        id
    }
}

export function toggleAll(isChecked: boolean) {
    return {
        type: TOGGLE_ALL,
        isChecked
    }
}

export function setFilter(status: StatusType) {
    return {
        type: SET_FILTER,
        status
    }
}