import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.scss']
})
export class AcademicComponent implements OnInit {

  tests: number[] = [];

  constructor(
    private navigationService: NavigationService,
    private router: Router
  ) { 
    for (let i = 1; i <= 200; i++) {
      this.tests.push(i);
    }
  }

  ngOnInit(): void {
    this.navigationService.setActiveTabs(this.router.url);
  }
}
