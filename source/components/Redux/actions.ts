import {ADD_ITEM, REMOVE_ITEM, REMOVE_ALL, TOGGLE_ITEM, TOGGLE_ALL, SET_VISIBILITY_FILTER } from './types';
import { VisibilityFilters } from './types';

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

export function toggleAll(completed: any) {
    return {
        type: TOGGLE_ALL,
        completed
    }
}

export function setVisibilityFilter(filter: any) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}