import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  public baseUrl = 'http://localhost:8080/lmsapi/book';

  constructor(private http: HttpClient) { }

  getBook(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addBook(member: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, member);
  }

  updateBook(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getBooksList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
