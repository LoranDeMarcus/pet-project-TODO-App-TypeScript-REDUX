export class Storage {
    liveData: any;
    getLocalStorage: () => Array<any>;
    setLocalStorage: (items: any) => void;

    constructor(name: any) {
        const localStorage = window.localStorage;

        this.getLocalStorage = () => {
            return this.liveData || JSON.parse(localStorage.getItem(name) || '[]');
        }

        this.setLocalStorage = (items: any) => {
            localStorage.setItem(name, JSON.stringify(this.liveData = items))
        }
    }

    addToLocalStorage(item: any) {
        const items: Array<any> = this.getLocalStorage();

        items.push(item);
        this.setLocalStorage(items);
     }

    removeFromLocalStorage(query: any) {
        const items: Array<any> = this.getLocalStorage();

        items.filter((item: any) =>
            item.id !== query.id
        )
        this.setLocalStorage(items);
    }
}