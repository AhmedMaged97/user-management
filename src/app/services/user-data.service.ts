import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { UserListModel } from '../models/useListModel';
import { UserDetailsModel } from '../models/userDetailsModel';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private currentUserId = new BehaviorSubject<number>(0);
  userIdSearch = this.currentUserId.asObservable();

  
  constructor(private _HttpClient:HttpClient) { }

  getUsersListData(page:number): Observable<UserListModel>{
    return this._HttpClient.get<UserListModel>(`https://reqres.in/api/users?page=${page}`).pipe(catchError(this.handleError));
  }
  getUsersDetailsData(userId:number): Observable<UserDetailsModel>{
    return this._HttpClient.get<UserDetailsModel>(`https://reqres.in/api/users/${userId}`).pipe(catchError(this.handleError));
  }

  changeNumber(searchId: number) {
    this.currentUserId.next(searchId);
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
