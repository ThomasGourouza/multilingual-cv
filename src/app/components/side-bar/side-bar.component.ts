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
        items: [
          {
            title: 'primarySchool',
            url: ['academic', 'primarySchool'],
            items: [
              {
                title: 'truc',
                url: ['academic', 'primarySchool', 'truc'],
                items: [
                  {
                    title: 'tric',
                    url: ['academic', 'primarySchool', 'truc', 'tric'],
                    items: []
                  },
                  {
                    title: 'troc',
                    url: ['academic', 'primarySchool', 'truc', 'troc'],
                    items: []
                  }
                ]
              },
              {
                title: 'trac',
                url: ['academic', 'primarySchool', 'trac'],
                items: []
              }
            ]
          },
          {
            title: 'highSchool',
            url: ['academic', 'highSchool'],
            items: []
          }
        ]
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
