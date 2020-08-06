import { ADD_ITEM, REMOVE_ITEM, TOGGLE_ITEM, TOGGLE_ALL, REMOVE_TOGGLED } from './types';
import { VisibilityFilters } from './types';

export function itemReducer(state: Array<any> = [], action: { type: string; id: number; title: string; isChecked: boolean; }) {
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
            return state.filter((item: { id: number; }) => item.id !== action.id)
        case TOGGLE_ITEM:
            return state.map((item: {  id: number; completed: boolean; }) =>
                (item.id === action.id)
                    ? {...item, completed: !item.completed}
                    : item
            );
        case TOGGLE_ALL:
            return state.map((item: { completed: boolean; }) => item.completed = action.isChecked);
        case REMOVE_TOGGLED:
            return [...state].filter((item: { completed: boolean; }) => !item.completed);
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