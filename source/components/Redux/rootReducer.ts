import { ADD_ITEM, REMOVE_ITEM, TOGGLE_ITEM, TOGGLE_ALL, SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED, REMOVE_ALL, CLEAR_INPUT } from './types';
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
            return state.map((item: any) =>
                (item.id === action.id)
                    ? {...item, completed: !item.completed}
                    : item
            )
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

function interfaceReducer(state: any = null, action: { type: string }) {
    switch (action.type) {
        case TOGGLE_ALL:
            return
        case REMOVE_ALL:
            return
        case SHOW_ALL:
            return
        case SHOW_ACTIVE:
            return
        case SHOW_COMPLETED:
            return
        default: state;
    }
    return state;
}

function inputReducer(state: any, action: any) {
    switch (action.type) {
        case CLEAR_INPUT:
            return state = '';
        default: state;
    }
    return state;
}

export const rootReducer = combineReducers({
    items: itemReducer,
    visibility: interfaceReducer
})