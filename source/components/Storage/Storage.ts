export class Storage {
    private readonly _getLocalStorage: () => Array<any>;
    private readonly _setLocalStorage: (items: any) => void;

    constructor(name: string) {
        const localStorage = window.localStorage;

        this._getLocalStorage = () => {
            return JSON.parse(localStorage.getItem(name) || 'null');
        }
        //приватные и публичные методы, интерфейсы, унаследоваться от этого класса для создания классов сохранения в куки
        this._setLocalStorage = (items: any) => {
            localStorage.setItem(name, JSON.stringify(items))
        }
    }

    set(state: any) {
        this._setLocalStorage(state);
    }

    get() {
        return this._getLocalStorage();
    }
}