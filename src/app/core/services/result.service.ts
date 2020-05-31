import { Injectable } from '@angular/core';

import { Http } from './http.service';
import { Observable } from 'rxjs';
import { Result } from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(
    private http: Http
  ) { }

  getResultById(id: string): Observable<Result> {
    return this.http.getExternal("https://www.mocky.io/v2/5ed31c88340000580001f240");
  }
}
