import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ChildDataService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {

    return this.http.get('./assets/data/dummy-data.json')
      .pipe(
        map((r: any[]) => {
          return r.map(item => {
            return {
              fullName: `${item.firstName} ${item.lastName}`,
              age: item.age
            }
          })
        })
      );
  }
}
