import { StatusType } from "../Redux/types";

export default class ItemTemplate {
    itemsList(state: any) {
        const itemList: any = state.itemList;
        return itemList.map((item: any) => {
                const template = `<li data-id="${item.id}" class="todo-app__list-item">
                <input class="todo-app__list-checkbox" type="checkbox" ${item.completed ? 'checked' : ''}>
                <label class="todo-app__list-checkbox-label ${item.completed ? 'todo-app__list-checkbox-label_completed' : ''}" >
                    ${item.title}
                </label>
                <button class="todo-app__item-destroy"></button>
            </li>`;
                if (state.filter === 'all' || state.filter === 'active' && !item.completed || state.filter === 'complete' && item.completed) {
                    return template;
                }
                return '';
            }
        ).join('');
    }

    footerFilterList(state: any) {
        const selectedFilter = 'todo-app__filters-item_selected';
        const filter: StatusType = state.filter;
        const filterList: any = state.filterList;

        return filterList.map((filterItem: any) => {
            return `<li data-status="${filterItem.status}" class="todo-app__filters-item todo-app__filters-item_all ${filter === filterItem.status ? selectedFilter : ''}">${filterItem.label}</li>`
        }).join('');
    }
}