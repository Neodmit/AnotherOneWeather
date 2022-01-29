import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{
  logoPath:string = "resources/pics/logo.svg";
  menuItemsPath:string = "../../../resources/jsonData/menu/menuItems.json"

  menuItems:any;//Тут эни хороший варик? ибо это то, что я получаю из джейсона
  buttonStyle?:String;
  menuOpenness:boolean = false;
  menuMode?:any;//Тут эни хороший варик? ибо это то, должно быть в формате MatDrawerMode

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.getMenuItems();
    this.setMenuMode(window.innerWidth);//Режим меню при инициализации окна
  }

  getMenuItems(){
    this.http.get(this.menuItemsPath).subscribe(data=>{
      this.menuItems = data
    })
  }

  @HostListener('window:resize', ['$event'])//Режим меню при движении окна
  onResize(event:any) {
    this.setMenuMode(event.target.innerWidth)
  }

  setMenuMode(width:Number){//Правила для окна
    if(width<=991){
      this.menuOpenness = false,
      this.menuMode = "over";
    }
    else{
      this.menuOpenness = true,
      this.menuMode = "side";
    }
  }
}
