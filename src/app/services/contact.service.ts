import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private _HTTP: HttpClient) { }

  private _URL: string = "http://localhost:3000/contacts/";

  getContacts():Observable<any[]> {
    return this._HTTP.get<any[]>(this._URL)
  }

  postContact(data:any):Observable<any> {
    return this._HTTP.post(this._URL,data)
  }

  putContact(data:any):Observable<any> {
    return this._HTTP.put(this._URL+data.id,data)
  }

  deleteContact(id:number):Observable<any> {
    return this._HTTP.delete(this._URL+id)
  }

}
