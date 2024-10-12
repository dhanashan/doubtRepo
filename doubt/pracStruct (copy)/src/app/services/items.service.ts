import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  createItems(item:any):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}`,item);
  }
}
