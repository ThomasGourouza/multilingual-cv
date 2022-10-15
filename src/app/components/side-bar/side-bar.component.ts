import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Input() sideBarOpen!: boolean;
  @Output() sideBarToggle = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onsideBarToggle(): void {
    this.sideBarOpen = !this.sideBarOpen;
    this.sideBarToggle.emit(this.sideBarOpen);
  }

}
