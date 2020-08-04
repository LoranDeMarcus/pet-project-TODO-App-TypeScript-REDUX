import '../components/base.scss';
import '../components/todo-app.scss';
import { createStore } from 'redux';
import { rootReducer } from "../components/Redux/rootReducer";
import { addItem } from "../components/Redux/actions";
import View from "../components/View/View";

const store = createStore(rootReducer);
const view = new View();

document.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        let input = document.querySelector('.todo-app__input') as any;

        const todoText = input.value.trim();
        return !todoText.length ? false : (store.dispatch(addItem(todoText)) && view.showItems(todoText));
    }
});

/* TODO: store.dispatch(addItem(todoText) или view.showItems(todoText), а может быть и сам слушатель события Enter должен быть в другом месте. Пересмотреть видос Владилена по redux */
store.dispatch({ type: 'INIT_APPLICATION' });

// $toggleAll.addEventListener('click', e => {
//     todoApp.toggleAllItems((e.target as HTMLInputElement).checked);
// });
//
// $todoList.addEventListener('change', (e: Event) => {
//     const $listItem = (e.target as HTMLElement).parentNode as HTMLElement;
//     if ((e.target  as HTMLElement).classList.contains('todo-app__list-checkbox')) {
//         todoApp.updateTodoStatus($listItem);
//     }
// });
//
// $todoList.addEventListener('click', (e: MouseEvent) => {
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
// $filterAll.addEventListener('click', (e: MouseEvent) => {
//     todoApp.showAllItems();
//     if (!(e.currentTarget as HTMLElement).classList.contains(filterItemSelected)) {
//         (e.currentTarget as HTMLElement).classList.add(filterItemSelected);
//         $filterActive.classList.remove(filterItemSelected);
//         $filterComplete.classList.remove(filterItemSelected);
//     }
// });
//
// $filterActive.addEventListener('click', (e: MouseEvent) => {
//     todoApp.showActiveItems();
//     if (!(e.currentTarget as HTMLElement).classList.contains(filterItemSelected)) {
//         (e.currentTarget as HTMLElement).classList.add(filterItemSelected);
//         $filterAll.classList.remove(filterItemSelected);
//         $filterComplete.classList.remove(filterItemSelected);
//     }
// });
//
// $filterComplete.addEventListener('click', (e: MouseEvent) => {
//     todoApp.showCompleteItems();
//     if (!(e.currentTarget as HTMLElement).classList.contains(filterItemSelected)) {
//         (e.currentTarget as HTMLElement).classList.add(filterItemSelected);
//         $filterActive.classList.remove(filterItemSelected);
//         $filterAll.classList.remove(filterItemSelected);
//     }
// });