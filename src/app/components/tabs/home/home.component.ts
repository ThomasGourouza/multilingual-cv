import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name = 'Thomas';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use(translate.getBrowserLang() || 'en');
  }

  ngOnInit(): void {
    console.log(this.translate.instant('demo.greeting', { name: 'Bob' }));

    this.translate.get('demo.greeting', { name: 'John' }).subscribe((res: string) => {
      console.log(res);
    });
  }

}
