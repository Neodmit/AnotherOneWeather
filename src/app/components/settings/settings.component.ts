import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data/user-data.service';
import { UserType } from 'src/app/types/UserType';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent{

  userData:UserType = this.userDataService.get();
  logoPath:string = "resources/pics/logo.svg";

  constructor(private userDataService:UserDataService) { }

  onSubmit(): void {
    this.userDataService.set(this.userData)
  }

}
