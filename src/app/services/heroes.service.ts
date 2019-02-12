import { Md5Hasher } from './../components/utils/helpers/md5-hasher';
import { config } from './../config/config';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeroesService {
    marvelUrl = 'https://gateway.marvel.com/v1/public/characters';
    constructor(private httpClient: HttpClient) { }

/**
 * Receives the data from the marvel api
 */
    getHeroes(heroName: string): Observable<any> {
        const ts = new Date().toDateString();
        const stringToHash = `${ts}${config.marvel.privateKey}${config.marvel.publicKey}`;
        const options = {
            headers: this.allowCors(),
            params: this.setGetHeroesParams(ts, stringToHash, heroName)
        };
        return this.httpClient.get(this.marvelUrl, options);
    }

/**
 * Return the headers to solve the cors problem 
 */
    private allowCors = (): HttpHeaders => {
        return new HttpHeaders(
            {
                'Content-Type': 'application/json; charset=utf-8',
                Accept:       'application/json',
            }
        );
    }

/**
 * Return the params for the api make the search
 */
    private setGetHeroesParams = (timeStamp: string, stringToHash: string, heroName: string): HttpParams => {
        return new HttpParams()
            .set('apikey', config.marvel.publicKey)
            .set('ts', timeStamp)
            .set('hash', Md5Hasher.hashString(stringToHash))
            .set('nameStartsWith', heroName);
    }

}
