import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{
  logoPath:string = "resources/pics/logo.svg";
  menuItemsPath:string = "../../../resources/jsonData/menu/menuItems.json"

  menuItems:any;
  innerWidth:any;
  buttonStyle:String = "";
  menuOpenness:boolean = false;
  menuMode:any = "";

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.getMenuItems();
    this.setMenuMode(window.innerWidth);
  }

  getMenuItems(){
    this.http.get(this.menuItemsPath).subscribe(data=>{
      this.menuItems = data
    })
  }

  setMenuMode(width:Number){
    if(width<=991){
      this.buttonStyle = "",
      this.menuOpenness = false,
      this.menuMode = "over";
    }
    else{
      this.buttonStyle = "display: none;",
      this.menuOpenness = true,
      this.menuMode = "side";
    }
  }
}
