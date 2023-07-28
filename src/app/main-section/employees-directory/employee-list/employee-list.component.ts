import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public getDataApi: any[] = [];
  isPopover = false;

  ngOnInit(): void {
    this.getEmployeeList();
    this.getRandomClass();
  }

  constructor(private _empService: EmployeeService) { }

  getInitials() {
    console.log('api ', this.getDataApi);

    this.getDataApi.forEach((obj) => {
      obj.initials = obj.firstName.charAt(0) + obj.lastName.charAt(0);
    })
  }

  getEmployeeList() {
    this._empService.getEmployeeListData().subscribe({
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

  show_empDetails(index: any) {
    let data = this.getDataApi[index];
    data.isPopover = !data.isPopover;
    this.getDataApi.forEach((obj) => {
      if (obj.id != data.id) {
        obj.isPopover = false;
      }
    })
  }

  getRandomClass() {
    const randomIndex = Math.floor(Math.random() * 6) + 1;
    return `profile${randomIndex}`;
  }
}
