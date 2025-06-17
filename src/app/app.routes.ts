import { Routes } from '@angular/router';
import { TempFormComponent } from './form-test/temp-form/temp-form.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:"get-user-data", loadComponent: () => import("./api-test/get-api/get-api.component").then(c => c.GetApiComponent) },
    {path:"Template-form", component: TempFormComponent},
    { path:"Reactive-form", loadComponent: () => import("./form-test/reactive-form/reactive-form.component").then(c=> c.ReactiveFormComponent) },
    { path:"control-flow", loadComponent: () => import("./control-flow/control-flow.component").then(c => c.ControlFlowComponent) },
    { path:"signal-17", loadComponent: () => import("./signal-test/version-17/version-17.component").then(c => c.Version17Component) },
    { path:"signal-16", loadComponent: () => import("./signal-test/version-16/version-16.component").then(c => c.Version16Component) },
    { path:'', component: HomeComponent },
    { path:'home', redirectTo: ''},
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
