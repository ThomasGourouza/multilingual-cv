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
        items: [
          'introduction'
        ]
      },
      {
        title: 'academic',
        items: [
          {
            title: 'primarySchool',
            items: [
              'school1',
              'school2',
              'school3',
            ]
          },
          {
            title: 'highSchool',
            items: [
              'first',
              {
                title: 'second',
                items: [
                  'school1',
                  'school2',
                  'school3',
                ]
              }
            ]
          }
        ]
      },
      {
        title: 'experiences',
        items: [
          'firstOne',
          {
            title: 'secondOne',
            items: [
              'this',
              'that'
            ]
          }
        ]
      },
      {
        title: 'hobbies',
        items: [
          'hobby1',
          'kenobi'
        ]
      },
      {
        title: 'test',
        items: []
      },
      {
        title: 'home',
        items: [
          'introduction'
        ]
      },
      {
        title: 'academic',
        items: [
          {
            title: 'primarySchool',
            items: [
              'school1',
              'school2',
              'school3',
            ]
          },
          {
            title: 'highSchool',
            items: [
              'first',
              {
                title: 'second',
                items: [
                  'school1',
                  'school2',
                  'school3',
                ]
              }
            ]
          }
        ]
      },
      {
        title: 'experiences',
        items: [
          'firstOne',
          {
            title: 'secondOne',
            items: [
              'this',
              'that'
            ]
          }
        ]
      },
      {
        title: 'hobbies',
        items: [
          'hobby1',
          'kenobi'
        ]
      },
      {
        title: 'test',
        items: []
      }
    ];
  }

  ngOnInit(): void { }

}
