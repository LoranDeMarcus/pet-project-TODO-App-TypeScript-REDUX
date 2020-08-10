import ItemTemplate from '../Templates/Item-template';

export default class View {
    template: ItemTemplate;
    $todoList: HTMLElement;
    $clearCompletedButton: HTMLElement;
    $footer: HTMLElement;
    $todoItemsLeft: HTMLElement;
    $todoFilter: HTMLElement;
    $toggleAll: HTMLElement;

    constructor() {
        this.template = new ItemTemplate();
        this.$todoList = document.querySelector('.todo-app__list') as HTMLElement;
        this.$toggleAll = document.querySelector('.todo-app__input-checkbox-label') as HTMLElement;
        this.$todoItemsLeft = document.querySelector('.todo-app__todo-count') as HTMLElement;
        this.$todoFilter = document.querySelector('.todo-app__filters-list') as HTMLElement;
        this.$clearCompletedButton = document.querySelector('.todo-app__clear-completed') as HTMLElement;
        this.$footer = document.querySelector('.todo-app__footer') as HTMLElement;
    }

    showItems(state: any) {
        // @ts-ignore
        this.$todoList.innerHTML = this.template.itemsList(state);
        // @ts-ignore
        this.$todoFilter.innerHTML = this.template.footerFilterList(state);
    }

    showToggleAllButton(state: any) {
        const itemList: any = state.itemList;
        itemList.length >= 1
            ? this.$toggleAll.style.display = 'block'
            : this.$toggleAll.style.display = 'none';
    }

    showFooter(state: any) {
        const itemList: any = state.itemList;
        itemList.length >= 1
            ? this.$footer.style.display = 'block'
            : this.$footer.style.display = 'none';
    }

    showClearCompletedButton(state: any) {
        const itemList: any = state.itemList;
        itemList.filter((item: { completed: boolean; }) => item.completed).length >= 1
            ? this.$clearCompletedButton.style.display = 'block'
            : this.$clearCompletedButton.style.display = 'none';
    }

    showActiveCount(state: any) {
        const itemList: any = state.itemList;
        const activeItems = itemList.filter((item: { completed: boolean }) => !item.completed).length;
        this.$todoItemsLeft.innerHTML = `${activeItems} active item${activeItems !== 1 ? 's' : ''} left`
    }
}