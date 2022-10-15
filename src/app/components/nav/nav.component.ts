import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() toggleSideBar!: boolean;
  @Output() onSideBarToggle = new EventEmitter<boolean>();

  public tabs = ['home', 'academic', 'experiences', 'interests'];
  public activeTab: string | undefined;

  constructor(
    private router: Router,
    private navigationService: NavigationService
  ) { }

  ngOnInit(): void {
    this.navigationService.activeTab$.subscribe((tab) =>
      this.activeTab = tab
    );
  }

  onChangeTab(tab: string): void {
    this.router.navigate([tab]);
  }

  onToggle(): void {
    this.toggleSideBar = !this.toggleSideBar;
    this.onSideBarToggle.emit(this.toggleSideBar);
  }

}
