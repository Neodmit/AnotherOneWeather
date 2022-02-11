import { NgModule } from '@angular/core';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { SettingsComponent } from 'src/app/components/settings/settings.component';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { EditingListComponent } from 'src/app/components/editing-list/editing-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'; 

@NgModule({
  declarations: [
    MenuComponent,
    LayoutComponent,
    HomeComponent,
    EditingListComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    HttpClientModule,
    MatCardModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule
  ],
  exports:[
    LayoutComponent
  ],
})
export class SharedModule { }
