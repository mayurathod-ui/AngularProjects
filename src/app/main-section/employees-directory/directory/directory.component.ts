import { Component } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent {
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
}
