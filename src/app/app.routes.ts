import { Routes } from '@angular/router';
import { TempFormComponent } from './form-test/temp-form/temp-form.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:"Template-form", component: TempFormComponent},
    { path:"Reactive-form", loadComponent: () => import("./form-test/reactive-form/reactive-form.component").then(c=> c.ReactiveFormComponent) },
    { path: '**', redirectTo: '', pathMatch: 'full' },
    { path: "", component: HomeComponent},
];
