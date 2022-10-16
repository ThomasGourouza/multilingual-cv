import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  constructor(
    private navigationService: NavigationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.navigationService.setActiveTabs(this.router.url);
  }

}
