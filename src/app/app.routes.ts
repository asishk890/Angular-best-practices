import { Routes } from '@angular/router';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

export const routes: Routes = [
    {path: '', component:TemplateDrivenFormComponent},
    {path: 'form', loadComponent: () => import('./form/form.component').then((c) => c.FormComponent)}
];
