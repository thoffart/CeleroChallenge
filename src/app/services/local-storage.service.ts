import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';


@Injectable()
export class LocalStorageService {

    constructor(protected localStorage: LocalStorage) { }

    getItem(itemName: string): Observable<any> {
        return this.localStorage.getItem(itemName);
    }

    setItem(itemName: string, item: any): Observable<any> {
        return this.localStorage.setItem(itemName, item);
    }

    deleteItem(itemName: string): Observable<any> {
        return this.localStorage.removeItem(itemName);
    }

    clearStore(): Observable<any> {
        return this.localStorage.clear();
    }

}
