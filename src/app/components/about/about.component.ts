import { Component, OnInit } from '@angular/core';
import { Persona } from '../interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  formList: Persona[];
  login: boolean;

  constructor() { }

  ngOnInit(): void { }
}

