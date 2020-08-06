import { ADD_ITEM, REMOVE_ITEM, TOGGLE_ITEM, TOGGLE_ALL, REMOVE_TOGGLED } from './types';
import { VisibilityFilters } from './types';
import { combineReducers } from "redux";

type TodoType = {
    id: number,
    title: string,
    completed: boolean
}

function itemReducer(state = [], action: { type: string; id: number; title: string; completed: boolean; isChecked: boolean; }) {
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
            );
        case TOGGLE_ALL:
            return {...state, };
        case REMOVE_TOGGLED:
            return [...state].filter((item: any) => !item.completed);
        default: state;
    }
    return state;
}

function getVisibleItems(state = [], action: any) { // TODO: разобраться как передать в этот reducer state из itemReducer
    switch (action.type) {
        case VisibilityFilters.SHOW_ALL:
            return state;
        case VisibilityFilters.SHOW_ACTIVE:
            return [...state].filter((item: { completed: boolean; }) => !item.completed);
        case VisibilityFilters.SHOW_COMPLETED:
            return [...state].filter((item: { completed: boolean; }) => item.completed);
        default: state;
    }
    return state;
}

export const rootReducer = combineReducers({
    items: itemReducer,
    visibility: getVisibleItems
})