import { Component, Input, OnInit } from '@angular/core';
export interface Content {
  title: string;
  items: (string | Content)[];
}

@Component({
  selector: 'app-table-content',
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.scss']
})
export class TableContentComponent implements OnInit {

  @Input() tableOfContent!: any;

  constructor() { }

  ngOnInit(): void {
  }

  public isString(item: string | Content): boolean {
    return typeof item === 'string';
  }
}
