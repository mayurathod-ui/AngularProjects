import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'http://localhost:3000/employees';

  constructor(private _http: HttpClient) { }

  addEmployee(data:any):Observable<any>{
    return this._http.post(this.apiUrl, data);
  }

  getEmployeeListData():Observable<any>{
    return this._http.get(this.apiUrl);
  }
}
