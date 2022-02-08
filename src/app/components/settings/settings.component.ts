import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LocalstorageService } from 'src/app/services/local-storage/localstorageService.service';
import { UserDataService } from 'src/app/services/user-data/user-data.service';
import { UserType } from 'src/app/types/UserType';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  userData:UserType = this.userDataService.getUserData();
  
  logoPath:string = "resources/pics/logo.svg";
  constructor(private localstorageService: LocalstorageService, private userDataService:UserDataService) { }

  ngOnInit(): void {
    this.userDataService.setUserData(this.localstorageService.getData('UserData'))
  }

  onSubmit(): void {
    this.localstorageService.setData('UserData', this.userData);
  }

}
