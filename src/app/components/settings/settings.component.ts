import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/services/localstorageService.service';

type userType = {
  name:String,
  surname:String,
  api:String
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  
  logoPath:string = "resources/pics/logo.svg";
  userData:userType = {
    name: ' ',
    surname: ' ',
    api: ' '
  }

  constructor(private localstorageService: LocalstorageService) { }

  ngOnInit(): void {
    this.userData = this.localstorageService.getLocalstorageData('UserData')
  }

  onSubmit(): void {
    this.localstorageService.setLocalstorageData('UserData',this.userData);
  }

}
