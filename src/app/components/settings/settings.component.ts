import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  logoPath:string = "resources/pics/logo.svg";

  userData = {
    name:String,
    surname:String,
    api:String
  }

  jsonUserData:any

  constructor() { }

  ngOnInit(): void {
    this.jsonUserData = localStorage.getItem('UserData')
    this.userData = JSON.parse(this.jsonUserData);
  }

  onSubmit(){
    localStorage.setItem('UserData', JSON.stringify(this.userData));
  }

}
