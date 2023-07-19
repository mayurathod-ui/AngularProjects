import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent {

  empForm: FormGroup;

  public jobtitle: string[] = [
    'Project Manager',
    'Sr. Project Manager',
    'Team Leader',
    'Jr. Software Developer',
    'Sr. Software Developer',
    'Lead UI Designer',
    'Sr. Web Designer',
    'QA',
    'Jr. QA',
    'Project Consultant',
  ];

  public department: string[] = [
    'Management',
    'Development',    
    'Tax Analysis',
    'Sales Analysis and QA',
    'HR and Finance',
    'Training',
  ]

  constructor(private _fb: FormBuilder, private _empService:EmployeeService){
    this.empForm = this._fb.group({
      firstName:'',
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
    })
  }

  onSubmit(){
    if(this.empForm.valid){
      const formData = this.empForm.value;
      this._empService.addEmployee(formData).subscribe({
        next: (val:any)=>{
          alert('Employee added successfully!');   
          this.empForm.reset();       
        },
        error: (err:any) => {
          console.error(err);          
        }
      })
    }    
  }
}
