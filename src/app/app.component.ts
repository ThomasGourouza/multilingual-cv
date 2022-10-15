import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public sideBarOpen = true;

  constructor() { }

  ngOnInit(): void { }

  onSideBarToggle(isOpen: boolean): void {
    this.sideBarOpen = isOpen;
  }

}
