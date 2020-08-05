import '../components/base.scss';
import '../components/todo-app.scss';
import { createStore } from 'redux';
import { rootReducer } from "../components/Redux/rootReducer";
import {
    addItem,
    removeItem,
    removeToggled,
    showActive,
    showALL, showCompleted,
    toggleAll,
    toggleItem
} from "../components/Redux/actions";

const $todoList = document.querySelector('.todo-app__list') as HTMLElement;
const $toggleAll = document.querySelector('#select-all') as HTMLElement;
const $clearCompletedButton = document.querySelector('.todo-app__clear-completed') as HTMLElement;
const $filterAll = document.querySelector('.todo-app__filters-item_all') as HTMLElement;
const $filterActive = document.querySelector('.todo-app__filters-item_active') as HTMLElement;
const $filterComplete = document.querySelector('.todo-app__filters-item_complete') as HTMLElement;

import View from "../components/View/View";
const store = createStore(rootReducer);

const view = new View();

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
    const { items } = store.getState();
    // @ts-ignore
    store.dispatch(showALL(items));
});

$filterActive.addEventListener('click', () => {
    const { items } = store.getState();
    console.log(items);
    // @ts-ignore
    store.dispatch(showActive(items));
});

$filterComplete.addEventListener('click',() => {
    const { items } = store.getState();
    // @ts-ignore
    store.dispatch(showCompleted(items));
});

store.subscribe(() => {
    const state = store.getState();
    const { items } = state;

    view.showItems(items);
    view.showFooter(items);
    view.showClearCompletedButton(items);
    console.log(state);
})