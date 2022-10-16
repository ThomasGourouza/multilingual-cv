import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { TranslateService } from "@ngx-translate/core";
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name = 'Thomas';
  public showIntro: boolean;

  constructor(
    // private translate: TranslateService,
    private navigationService: NavigationService,
    private router: Router
  ) {
    this.showIntro = this.router.url.includes('introduction');
    this.navigationService.setActiveTabs(this.router.url);
  }

  ngOnInit(): void {
    
    // console.log(this.translate.instant('demo.greeting', { name: 'Bob' }));
    // this.translate.get('demo.greeting', { name: 'John' }).subscribe((res: string) => {
    //   console.log(res);
    // });
  }

}
