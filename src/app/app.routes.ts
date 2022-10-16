import { Routes } from '@angular/router';
import { AcademicComponent } from './components/tabs/academic/academic.component';
import { ExperiencesComponent } from './components/tabs/experiences/experiences.component';
import { HomeComponent } from './components/tabs/home/home.component';
import { InterestsComponent } from './components/tabs/interests/interests.component';

export const APP_ROUTES: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'home/introduction',
        component: HomeComponent
    },
    {
        path: 'academic',
        component: AcademicComponent
    },
    {
        path: 'experiences',
        component: ExperiencesComponent
    },
    {
        path: 'interests',
        component: InterestsComponent
    },
    {
        path: 'article/:id',
        component: HomeComponent
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
