import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {
  public department:any;
  empForm: FormGroup;
  
  public selectedDepartment: string = 'Select Department';
  public selectJobTitle: string = 'Select Job Title';
  public empObject: any = {firstName:'', lastName:'', department:'' };
  public employeeData : any = [];
  public search: string = ' ';

  public departGetData = this._empService.department.values;

  public jobtitle: string[] = [
    'Project Manager',
    'Sr. Project Manager',
    'Team Leader',
    'Jr. Software Developer',
    'Sr. Software Developer',
    'Lead UI Designer',
    'Sr. Designer',
    'QA',
    'Jr. QA',
    'Project Consultant',
  ];

  constructor(private _fb: FormBuilder, public _empService: EmployeeService) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      mobileNo: '',
      dateOfBirth: '',
      gender: '',
      jobTitle: '',
      Department: '',
      bloodGroup: '',
      location: '',
      address: '',
    });
    this.department = this._empService.department;
    this._empService.getEmployeeList();
    
  }

  filterEmp(search:any){
    const filterEmpData = this._empService.getDataApi.filter((f:any) => f.firstName.toLowerCase().includes(search.toLowerCase()));
    if(filterEmpData.length !== 0){
     this.employeeData = filterEmpData;   
    }else{
      this._empService.getEmployeeList();
    }
  }


  clearFilter(){
    this.empObject = '';    
    this.employeeData = this._empService.getDataApi;
    
  }

  filterByDepart(event:any){
    console.log(event);
  }

  onSubmit() {
    if (this.empForm.valid) {
      const formData = this.empForm.value;
      this._empService.addEmployee(formData).subscribe({
        next: (val: any) => {
          alert('Employee added successfully!');
          this.empForm.reset();
        },
        error: (err: any) => {
          console.error(err);
        }
      })
    }
  }

  ngOnInit(): void {
    setTimeout(()=>{
      this.employeeData = this._empService.getDataApi;
    },100)
  }
}
