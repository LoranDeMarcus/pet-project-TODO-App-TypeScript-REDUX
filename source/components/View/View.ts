import ItemTemplate from "../Templates/Item-template";

export default class View {
    template: ItemTemplate;
    $todoList: HTMLElement;
    $clearCompletedButton: HTMLElement;
    $footer: HTMLElement;

    constructor() {
        this.template = new ItemTemplate();
        this.$todoList = document.querySelector('.todo-app__list') as HTMLElement;
        this.$clearCompletedButton = document.querySelector('.todo-app__clear-completed') as HTMLElement;
        this.$footer = document.querySelector('.todo-app__footer') as HTMLElement;
    }

    showItems(items: Array<any>) {
        // @ts-ignore
        this.$todoList.innerHTML = this.template.itemsList(items);
    }

    showFooter(items: Array<any>) {
        items.length >= 1
            ? this.$footer.style.display = 'block'
            : this.$footer.style.display = 'none';
    }

    showClearCompletedButton(items: Array<any>) {
        items.filter((item: { completed: boolean; }) => item.completed).length >= 1
            ? this.$clearCompletedButton.style.display = 'block'
            : this.$clearCompletedButton.style.display = 'none';
    }
}