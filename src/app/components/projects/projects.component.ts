import { Component, OnInit } from '@angular/core';
import { Project } from '../interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  formList: Project[];
  login: boolean;

  constructor() {
  }

  ngOnInit(): void {}

}
