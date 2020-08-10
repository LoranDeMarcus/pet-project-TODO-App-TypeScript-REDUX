import { ADD_ITEM, REMOVE_ITEM, TOGGLE_ITEM, TOGGLE_ALL, REMOVE_TOGGLED, SET_FILTER, StatusType } from './types';

type initialObjectType = {
    itemList: Array<any>,
    filter: StatusType,
    filterList: Array<any>
};

const initialObject: initialObjectType = {
    itemList: [],
    filter: 'all',
    filterList: [
        {
            status: 'all',
            label: 'All'
        },
        {
            status: 'active',
            label: 'Active'
        },
        {
            status: 'complete',
            label: 'Complete'
        }
    ]
}

export function itemReducer(state: any = initialObject, action: any) {
    switch (action.type) {
        case ADD_ITEM:
            return {...state,
                itemList: [
                    ...state.itemList,
                    {
                        id: action.id,
                        title: action.title,
                        completed: false
                    }
            ]};
        case REMOVE_ITEM:
            return {...state, itemList: state.itemList.filter((item: { id: number; }) => item.id !== action.id)};
        case TOGGLE_ITEM:
            return {...state, itemList: state.itemList.map((item: {  id: number; completed: boolean; }) =>
                (item.id === action.id)
                    ? {...item, completed: !item.completed}
                    : item
            )};
        case TOGGLE_ALL:
            return {...state, itemList: state.itemList.map((item: { completed: boolean; }) => ({...item, completed: action.isChecked}))};
        case REMOVE_TOGGLED:
            return {...state, itemList: state.itemList.filter((item: { completed: boolean; }) => !item.completed)};
        case SET_FILTER:
            return {...state, filter: action.status};
        default: return state;
    }
}