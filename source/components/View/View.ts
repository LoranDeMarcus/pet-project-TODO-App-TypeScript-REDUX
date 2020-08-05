import ItemTemplate from "../Templates/Item-template";

export default class View {
    template: ItemTemplate;
    toggleAll: HTMLElement;
    $todoList: HTMLElement;
    $filtersList: HTMLElement;
    filterItemSelected: string;
    $filterAll: HTMLElement;
    $filterActive: HTMLElement;
    $filterComplete: HTMLElement;
    $clearCompletedButton: HTMLElement;
    store: any;

    constructor() {
        this.template = new ItemTemplate();
        this.toggleAll = document.querySelector('#select-all') as HTMLElement;
        this.$todoList = document.querySelector('.todo-app__list') as HTMLElement;
        this.$filtersList = document.querySelector('.todo-app__filters-list') as HTMLElement;
        this.filterItemSelected = 'todo-app__filters-item_selected';
        this.$filterAll = this.$filtersList.querySelector('.todo-app__filters-item_all') as HTMLElement;
        this.$filterActive = this.$filtersList.querySelector('.todo-app__filters-item_active') as HTMLElement;
        this.$filterComplete = this.$filtersList.querySelector('.todo-app__filters-item_complete') as HTMLElement;
        this.$clearCompletedButton = document.querySelector('.todo-app__clear-completed') as HTMLElement;

    }

    showItems(items: Array<any>) {
        // @ts-ignore
        this.$todoList.innerHTML = this.template.itemsList(items);
    }
}