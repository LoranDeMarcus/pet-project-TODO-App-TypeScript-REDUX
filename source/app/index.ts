import '../components/base.scss';
import '../components/todo-app.scss';
import { createStore } from 'redux';
import { rootReducer } from "../components/Redux/rootReducer";
import {addItem, removeItem, toggleItem} from "../components/Redux/actions";
import View from "../components/View/View";

const store = createStore(rootReducer);
const view = new View();

const btn = document.querySelector('.todo-app__title') as HTMLElement;

document.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
        let input = document.querySelector('.todo-app__input') as HTMLInputElement;

        const todoText = input.value.trim();
        // @ts-ignore
        return !todoText.length ? false : store.dispatch(addItem(todoText));
    }
});

btn.addEventListener('click', () => {
    // @ts-ignore
    store.dispatch(removeItem(1));
})

store.subscribe(() => {
    const state = store.getState();

    console.log(state);
})

// @ts-ignore
store.dispatch({ type: 'INIT_APPLICATION' });

// $toggleAll.addEventListener('click', e => {
//     todoApp.toggleAllItems((e.target as HTMLInputElement).checked);
// });
//
// $todoList.addEventListener('change', e => {
//     const $listItem = (e.target as HTMLElement).parentNode as HTMLElement;
//     if ((e.target  as HTMLElement).classList.contains('todo-app__list-checkbox')) {
//         todoApp.updateTodoStatus($listItem);
//     }
// });
//
// $todoList.addEventListener('click', e => {
//     const $listItem = (e.target as HTMLElement).parentNode;
//     if ((e.target as HTMLElement).classList.contains('todo-app__item-destroy')) {
//         todoApp.deleteTodoItem($listItem);
//     }
// });
//
// $clearCompletedButton.addEventListener('click', () => {
//     todoApp.clearCompleted();
// })
//
// $filterAll.addEventListener('click', e => {
//     todoApp.showAllItems();
//     if (!(e.currentTarget as HTMLElement).classList.contains(filterItemSelected)) {
//         (e.currentTarget as HTMLElement).classList.add(filterItemSelected);
//         $filterActive.classList.remove(filterItemSelected);
//         $filterComplete.classList.remove(filterItemSelected);
//     }
// });
//
// $filterActive.addEventListener('click', e => {
//     todoApp.showActiveItems();
//     if (!(e.currentTarget as HTMLElement).classList.contains(filterItemSelected)) {
//         (e.currentTarget as HTMLElement).classList.add(filterItemSelected);
//         $filterAll.classList.remove(filterItemSelected);
//         $filterComplete.classList.remove(filterItemSelected);
//     }
// });
//
// $filterComplete.addEventListener('click', e => {
//     todoApp.showCompleteItems();
//     if (!(e.currentTarget as HTMLElement).classList.contains(filterItemSelected)) {
//         (e.currentTarget as HTMLElement).classList.add(filterItemSelected);
//         $filterActive.classList.remove(filterItemSelected);
//         $filterAll.classList.remove(filterItemSelected);
//     }
// });