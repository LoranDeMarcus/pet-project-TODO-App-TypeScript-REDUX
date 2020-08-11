export class Storage {
    getLocalStorage: () => Array<any>;
    setLocalStorage: (items: any) => void;

    constructor(name: string) {
        const localStorage = window.localStorage;

        this.getLocalStorage = () => {
            return JSON.parse(localStorage.getItem(name) || '{}');
        }
        //приватные и публичные методы, интерфейсы, унаследоваться от этого класса для создания классов сохранения в куки
        this.setLocalStorage = (items: any) => {
            localStorage.setItem(name, JSON.stringify(items))
        }
    }

    set(state: any) {
        this.setLocalStorage(state);
    }

    get() {
        return this.getLocalStorage();
    }
}