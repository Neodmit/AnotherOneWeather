import { Component, OnInit, HostListener } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{
  logoPath:string = "resources/pics/logo.svg";

  buttonStyle?:String;
  menuOpenness:boolean = false;
  menuMode:MatDrawerMode="side";

  ngOnInit(): void {
    this.setMenuMode(window.innerWidth);//Режим меню при инициализации окна
  }

  @HostListener('window:resize', ['$event'])//Режим меню при движении окна
  onResize(event:any): void {
    this.setMenuMode(event.target.innerWidth)
  }

  setMenuMode(width:Number): void {//Правила для окна
    if(width<=991){ //Да, я помню
      this.menuOpenness = false,
      this.menuMode = "over";
    }
    else{
      this.menuOpenness = true,
      this.menuMode = "side";
    }
  }
}
