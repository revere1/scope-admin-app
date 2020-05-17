import { Component } from '@angular/core';


import { ListPage } from '../list/list';
import { HomePage } from '../home/home';
import { CloseOrdersPage } from '../close-orders/close-orders';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ListPage;
  tab3Root = CloseOrdersPage;

  constructor() {

  }
}
