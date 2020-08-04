export default class ItemTemplate {
    itemsList(items: Array<any>) {
        return items.map((item) => {
            `<li data-id="${item.id}" class="todo-app__list-item">
                <input class="todo-app__list-checkbox" type="checkbox" ${item.completed ? 'checked' : ''}>
                <label class="todo-app__list-checkbox-label ${item.completed ? ' todo-app__list-checkbox-label_completed' : ''}" >
                    ${item.title}
                </label>
                <button class="todo-app__item-destroy"></button>
            </li>`
        });
    }
}