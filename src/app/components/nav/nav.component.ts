import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public tabs = ['home', 'academic', 'experiences', 'interests'];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onTabClick(tab: string): void {
    this.router.navigate([tab]);
  }

}
