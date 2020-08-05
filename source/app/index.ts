import '../components/base.scss';
import '../components/todo-app.scss';
import { createStore } from 'redux';
import { rootReducer } from "../components/Redux/rootReducer";
import {addItem, removeItem, toggleItem} from "../components/Redux/actions";

const $todoList = document.querySelector('.todo-app__list') as HTMLElement;

import View from "../components/View/View";
const store = createStore(rootReducer);

const view = new View();

document.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
        let input = document.querySelector('.todo-app__input') as HTMLInputElement;
        const todoText = input.value.trim();
        const itemsArray = items();

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

store.subscribe(() => {
    const state = store.getState();
    const { items, visibility } = state;

    view.showItems(items);
    console.log(items);
})

function items() {
    const state = store.getState();
    const { items } = state;
    return items;
}