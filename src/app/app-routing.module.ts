import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';
import { EditingListComponent } from './components/editing-list/editing-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'editing', component: EditingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
