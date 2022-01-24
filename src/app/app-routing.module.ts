import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LayoutComponent } from './hoc/layout/layout.component';

const routes: Routes = [
  {path: '', component: LayoutComponent, children:[
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: '', component: HomeComponent},
    {path: 'settings', component: SettingsComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
