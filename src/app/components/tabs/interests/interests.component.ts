import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss']
})
export class InterestsComponent implements OnInit {

  constructor(
    private navigationService: NavigationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.navigationService.setActiveTabs(this.router.url);
  }

}
