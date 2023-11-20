import { Component, OnInit } from '@angular/core';
import { Habilidad } from '../interface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  formList: Habilidad[];
  login: boolean;
  numerito: number = 40;

  constructor() { }

  ngOnInit(): void { }

}
