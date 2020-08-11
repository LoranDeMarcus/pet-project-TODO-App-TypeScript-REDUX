import '../components/base.scss';
import '../components/todo-app.scss';
import { Storage } from '../components/Storage/Storage';
import View from '../components/View/View';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import {initialObject, itemReducer} from '../components/Redux/rootReducer';
import {
    addItem,
    removeItem,
    removeToggled,
    setFilter,
    toggleAll,
    toggleItem
} from '../components/Redux/actions';


const $todoList = document.querySelector('.todo-app__list') as HTMLElement;
const $toggleAll = document.querySelector('#select-all') as HTMLElement;
const $clearCompletedButton = document.querySelector('.todo-app__clear-completed') as HTMLElement;
const $filterList = document.querySelector('.todo-app__filters-list') as HTMLElement;

const storage = new Storage('todolist-TS+REDUX');
const view = new View();
const store = createStore(itemReducer, storage.get() ?? initialObject, applyMiddleware(logger));

document.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
        let input = document.querySelector('.todo-app__input') as HTMLInputElement;
        const todoText: string = input.value.trim();

        if (!todoText.length) {
            return false
        }
        store.dispatch(addItem(todoText));
        input.value = '';
    }
});

$todoList.addEventListener('change', e => {
    const $listItem = (e.target as HTMLElement).parentNode as HTMLElement;
    const id = Number($listItem.dataset.id);
    if ((e.target as HTMLElement).classList.contains('todo-app__list-checkbox')) {
        store.dispatch(toggleItem(id));
    }
});

$todoList.addEventListener('click', e => {
    const $listItem = (e.target as HTMLElement).parentNode as HTMLElement;
    const id = Number($listItem.dataset.id);
    if ((e.target as HTMLElement).classList.contains('todo-app__item-destroy')) {
        store.dispatch(removeItem(id));
    }
});

$toggleAll.addEventListener('click', e => {
    const isChecked = ((e.target as HTMLInputElement).checked);
    store.dispatch(toggleAll(isChecked));
});

$clearCompletedButton.addEventListener('click', () => {
    store.dispatch(removeToggled());
});

$filterList.addEventListener('click', (e: any) => {
    if ((e.target as HTMLElement).classList.contains('todo-app__filters-item')) {
        const status: any = String(e.target.dataset.status);
        store.dispatch(setFilter(status));
    }
});

store.subscribe(() => {
    const state: any = store.getState();
    storage.set(state);
    render(state);
});

function render(state: any) {
    view.showItems(state);
    view.showToggleAllButton(state);
    view.showActiveCount(state);
    view.showFooter(state);
    view.showClearCompletedButton(state);
}

render(store.getState());