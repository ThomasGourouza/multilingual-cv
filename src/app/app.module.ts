import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';

import { TranslateLoader, TranslateModule, TranslateCompiler } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/tabs/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { LanguageSelectComponent } from './components/nav/language-select/language-select.component';
import { LanguagePipe } from './pipes/language.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { AcademicComponent } from './components/tabs/academic/academic.component';
import { InterestsComponent } from './components/tabs/interests/interests.component';
import { ExperiencesComponent } from './components/tabs/experiences/experiences.component';
import { NavigationService } from './services/navigation.service';
import { TableContentComponent } from './components/side-bar/table-content/table-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    LanguageSelectComponent,
    LanguagePipe,
    SideBarComponent,
    AcademicComponent,
    InterestsComponent,
    ExperiencesComponent,
    TableContentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      compiler: {
        provide: TranslateCompiler,
        useClass: TranslateMessageFormatCompiler
      }
    }),
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
