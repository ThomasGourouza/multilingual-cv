import { Component, OnInit } from '@angular/core';
import { Content } from './table-content/table-content.component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  public tableOfContents: Content[] = [];

  constructor() { 
    this.tableOfContents = [
      {
        title: 'home',
        url: ['home'],
        items: [
          {
            title: 'introduction',
            url: ['home', 'introduction'],
            items: []
          }
        ]
      },
      {
        title: 'academic',
        url: ['academic'],
        items: []
      },
      {
        title: 'experiences',
        url: ['experiences'],
        items: []
      },
      {
        title: 'interests',
        url: ['interests'],
        items: []
      }
    ];
  }

  ngOnInit(): void { }

}
