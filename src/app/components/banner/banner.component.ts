import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Persona } from '../interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent implements OnInit, AfterViewInit {
  //form
  formList: Persona[];

  //welcome
  @ViewChild('title', { static: true }) title: ElementRef;
  letters: string[] = ['L','o','u','r','d','e','s',' ','R','a','m', 'o', 's'];

  constructor() { }

  ngOnInit(): void { }

  //WELCOME
  ngAfterViewInit() {
    const title = this.title.nativeElement as HTMLElement;
    const letters = title.querySelectorAll('.letter');

    Array.from(letters).forEach((letter, index) => {
      const spanLetter = letter as HTMLSpanElement;
      spanLetter.addEventListener('mousemove', event => {
        const limit = 20;
        const x = event.clientX - (spanLetter.offsetLeft + spanLetter.clientWidth / 2);
        const y = event.clientY - (spanLetter.offsetTop + spanLetter.clientHeight / 2);
        spanLetter.style.top = `${y / limit}px`;
        spanLetter.style.left = `${x / limit}px`;
      });

      spanLetter.addEventListener('mouseout', () => {
        spanLetter.style.top = '0';
        spanLetter.style.left = '0';
        spanLetter.style.transition = 'all 0.5s ease';
      });
    });
  }

}