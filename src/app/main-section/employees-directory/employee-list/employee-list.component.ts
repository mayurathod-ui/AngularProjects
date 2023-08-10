import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service'
import { ColDef, GetRowIdFunc, GetRowIdParams, GridApi, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  public department:any;
  @Input() employeeData:any
  public getDataApi: any[] = [];
  isPopover = false;

  columnDefs: any[];
  private gridApi!: GridApi;
  // DefaultColDef sets props common to all Columns
  public defaultColDef: any;

  isGridView: boolean = false;
  public isChecked = false;

  public value1= false;
  public value2= false;


  ngOnInit(): void {    
    this.department = this._empService.department;    
  }

  constructor(public _empService: EmployeeService) {
    this.columnDefs = [
      { headerName: '', field: '', width: 70,
        cellRenderer: (params: any) => {
          return `<span><img class="profile-32 rounded-circle" src="assets/Images//employee-img/1.JPEG"></span>`;
        },
      },
      { headerName: 'Employee Name', field: 'fullName', width: 200 },
      { headerName: 'Job title', field:'jobTitle', width: 180},
      { headerName: 'Department', field:'Department', width: 125},
      { headerName: 'Email', field:'email', width: 250},
      { headerName: 'Contact no.', field:'mobileNo', width: 115},
      { headerName: 'Birthdate', field:'dateOfBirth', width: 115},
      { headerName: 'Blood Group', field:'bloodGroup', width: 115},
      { headerName: 'Location', field:'location', width: 150},
      { headerName: 'Address', field:'address', flex:1},
    ];
    this.defaultColDef = {
      enableValue: true,
      enableRowGroup: true,
      sortable: false,
      resizable: true,
      lockPosition: true,
      tooltip: (p: any) => {
        return p.value;
      },
      enableBrowserTooltips: true
    };
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }
  
  getRandomClr() {
    const randomIndex = Math.floor(Math.random() * 6) + 1;
    return `profile${randomIndex}`;
  }
}
