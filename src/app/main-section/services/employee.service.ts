import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'http://localhost:3000/employees';
  public getDataApi: any[] = [];

  constructor(private _http: HttpClient) { }

  // public jobtitle: string[] = [
  //   'Project Manager',
  //   'Sr. Project Manager',
  //   'Team Leader',
  //   'Jr. Software Developer',
  //   'Sr. Software Developer',
  //   'Lead UI Designer',
  //   'Sr. Designer',
  //   'QA',
  //   'Jr. QA',
  //   'Project Consultant',
  // ];

  department = [
    {
      key: 'Management',
      value: 'Management',
    },
    {
      key: 'Development',
      value: 'Development',
    },
    {
      key: 'TaxAnalysis',
      value: 'Tax Analysis',
    },
    {
      key: 'SAQA',
      value: 'Sales Analysis and QA',
    },
    {
      key: 'HRFinance',
      value: 'HR and Finance',
    },
    {
      key: 'Training',
      value: 'Training',
    },
  ];

  addEmployee(data:any):Observable<any>{
    return this._http.post(this.apiUrl, data);
  }

  getEmployeeListData():Observable<any>{
    return this._http.get(this.apiUrl);
  }

  getInitials() {
    //console.log('api ', this.getDataApi);
    this.getDataApi.forEach((obj) => {
      obj.initials = obj.firstName.charAt(0) + obj.lastName.charAt(0);
    })
  }

  getEmployeeList() {
    this.getEmployeeListData().subscribe({
      next: (res) => {
        res.forEach((obj: any) => {
          obj.fullName = obj.firstName + ' ' + obj.lastName;
        });
        this.getDataApi = res;
        this.getInitials();
      },
      error: (err) => {
        console.log('Error fetching data:', err);
      }
    })
  }
}
