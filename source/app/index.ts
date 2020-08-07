import '../components/base.scss';
import '../components/todo-app.scss';
import View from "../components/View/View";
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { itemReducer } from "../components/Redux/rootReducer";
import {
    addItem,
    removeItem,
    removeToggled,
    showActive,
    showALL,
    showCompleted,
    toggleAll,
    toggleItem
} from "../components/Redux/actions";

const $todoList = document.querySelector('.todo-app__list') as HTMLElement;
const $toggleAll = document.querySelector('#select-all') as HTMLElement;
const $clearCompletedButton = document.querySelector('.todo-app__clear-completed') as HTMLElement;
const $filterAll = document.querySelector('.todo-app__filters-item_all') as HTMLElement;
const $filterActive = document.querySelector('.todo-app__filters-item_active') as HTMLElement;
const $filterComplete = document.querySelector('.todo-app__filters-item_complete') as HTMLElement;

const view = new View();
const store = createStore(itemReducer, applyMiddleware(logger));

document.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
        let input = document.querySelector('.todo-app__input') as HTMLInputElement;
        const todoText = input.value.trim();

        if (!todoText.length) {
            return false
        }
        // @ts-ignore
        store.dispatch(addItem(todoText));
        input.value = '';
    }
});

$todoList.addEventListener('change', e => {
    const $listItem = (e.target as HTMLElement).parentNode as HTMLElement;
    const id = Number($listItem.dataset.id);
    console.log(id);
    if ((e.target as HTMLElement).classList.contains('todo-app__list-checkbox')) {
        // @ts-ignore
        store.dispatch(toggleItem(id));
    }
});

$todoList.addEventListener('click', e => {
    const $listItem = (e.target as HTMLElement).parentNode as HTMLElement;
    const id = Number($listItem.dataset.id);
    console.log(id);
    if ((e.target as HTMLElement).classList.contains('todo-app__item-destroy')) {
        // @ts-ignore
        store.dispatch(removeItem(id));
    }
});

$toggleAll.addEventListener('click', e => {
    const isChecked = ((e.target as HTMLInputElement).checked);
    // @ts-ignore
    store.dispatch(toggleAll(isChecked));
});

$clearCompletedButton.addEventListener('click', () => {
    // @ts-ignore
    store.dispatch(removeToggled());
});

$filterAll.addEventListener('click', () => {
    // @ts-ignore
    store.dispatch(showALL());
});

$filterActive.addEventListener('click', () => {
    // @ts-ignore
    store.dispatch(showActive());
});

$filterComplete.addEventListener('click',() => {
    // @ts-ignore
    store.dispatch(showCompleted());
});

store.subscribe(() => {
    const state = store.getState();

    view.showItems(state);
    view.showActiveCount(state);
    view.showFooter(state);
    view.showClearCompletedButton(state);
})