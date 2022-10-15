import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.scss']
})
export class AcademicComponent implements OnInit {

  tests: number[] = [];

  constructor() { 
    for (let i = 1; i <= 200; i++) {
      this.tests.push(i);
    }
  }

  ngOnInit(): void { }

}
