import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://dummyjson.com/users';
  constructor(private http: HttpClient) { }

  getAll(): Observable<User> {
    return this.http.get<User>(this.url)
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`)
  }

  getUserByUserName(username: string): Observable<User> {
    return this.http.get<User>(`${this.url}/${username})`);
  }
}
