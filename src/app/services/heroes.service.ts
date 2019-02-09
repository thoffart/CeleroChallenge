import { Md5Hasher } from './../components/utils/helpers/md5-hasher';
import { config } from './../config/config';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class HeroesService {
    marvelUrl = 'https://gateway.marvel.com/v1/public/characters';
    constructor(private httpClient: HttpClient) { }

    getHeroes(heroName: string): Observable<any> {
        const ts = new Date().toDateString();
        const stringToHash = `${ts}${config.marvel.privateKey}${config.marvel.publicKey}`;
        const options = {
            headers: this.allowCors(),
            params: this.setGetHeroesParams(ts, stringToHash, heroName)
        };
        return this.httpClient.get(this.marvelUrl, options);
    }

    private allowCors = (): HttpHeaders => {
        return new HttpHeaders(
            {
                'Content-Type': 'application/json; charset=utf-8',
                Accept:       'application/json',
            }
        );
    }

    private setGetHeroesParams = (timeStamp: string, stringToHash: string, heroName: string): HttpParams => {
        return new HttpParams()
            .set('apikey', config.marvel.publicKey)
            .set('ts', timeStamp)
            .set('hash', Md5Hasher.hashString(stringToHash))
            .set('nameStartsWith', heroName);
    }

}
