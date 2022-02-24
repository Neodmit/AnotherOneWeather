import { Component } from '@angular/core';
import menuItems from '../../../resources/jsonData/menu/menuItems';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  menuItems = menuItems;

}
