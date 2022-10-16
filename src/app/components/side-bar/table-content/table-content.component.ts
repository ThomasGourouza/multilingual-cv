import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';
export interface Content {
  title: string;
  url: string[],
  items: Content[];
}

@Component({
  selector: 'app-table-content',
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.scss']
})
export class TableContentComponent implements OnInit {

  @Input() tableOfContent!: Content;
  public subTab!: string[];

  constructor(
    private navigationService: NavigationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.navigationService.activeTabs$.subscribe((tabs) =>
      this.subTab = tabs
    );
  }

  public onContentClick(url: string[]): void {
    this.router.navigate(url);
  }

  public arrayEquals(array1: string[], array2: string[]): boolean {
    return array1.join('/') === array2.join('/');
  }

}
