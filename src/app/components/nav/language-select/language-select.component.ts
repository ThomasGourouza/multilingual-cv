import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss']
})
export class LanguageSelectComponent implements OnInit {

  public languages = ['en', 'de', 'fr'];
  public selectedLanguage: string;

  constructor(private translate: TranslateService) {
    this.selectedLanguage = translate.getBrowserLang() || 'en';
  }

  ngOnInit(): void { }

  onChangeLanguage(language: string): void {
    this.translate.use(language);
  }

}
