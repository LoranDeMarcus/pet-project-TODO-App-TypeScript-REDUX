import { ADD_ITEM, REMOVE_ITEM, TOGGLE_ITEM, TOGGLE_ALL, REMOVE_ALL, SET_VISIBILITY_FILTER } from './types';
import { VisibilityFilters } from './types';
import { combineReducers } from "redux";

function itemReducer(state = [], action: { type: string; id: number; title: string; completed: boolean }) {
    switch (action.type) {
        case ADD_ITEM:
            return [...state,
                {
                    id: action.id,
                    title: action.title,
                    completed: false
                }
            ];
        case REMOVE_ITEM:
            return [...state].filter((item: any) => item.id !== action.id)
        case TOGGLE_ITEM:
            return state.map((item: any) =>
                (item.id === action.id)
                    ? {...item, completed: !item.completed}
                    : item
            )
        default: state;
    }
    return state;
}

function allItemsReducer(state: any, action: { type: any; completed: boolean}) {
    switch (action.type) {
        case TOGGLE_ALL:
            return {...state, action }
        case REMOVE_ALL:
            return
        default:
            state;
    }
    return state;
}

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action: { type: any; filter: any; }) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default: state;
    }
    return state;
}
export const rootReducer = combineReducers({
    items: itemReducer,
    visibility: visibilityFilter
})